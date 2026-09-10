import { JwtPayload } from "jsonwebtoken";
import { HttpException } from "../exceptions/http.exception.js";
import { prisma } from "../lib/prisma.js";
import { LoginData, RegisterData } from "../types/auth.type.js";
import { hashPassword, verifyPassword } from "../utils/hash.js";
import { redis } from "../utils/ioredis.js";
import { decodeToken, generateToken, verifyRefreshToken } from "../utils/jwt.js";
import { sendMailWithTemplate } from "../utils/mailer.js";
import { generateOTP } from "../utils/otp.js";

export const authService = {
    async register(registeData: RegisterData) {
        return prisma.user.create({
            data: {
                ...registeData,
                password: hashPassword(registeData.password)
            }
        })
    },
    async login(loginData: LoginData) {
        //1. Check email tồn tại trên db không?
        const user = await prisma.user.findUnique({
            where: { email: loginData.email }
        })
        if (!user) {
            throw new HttpException("Email or password invalid", 401);
        }
        //2. Verify password có hợp lệ không?
        if (!verifyPassword(user.password as string, loginData.password)) {
            throw new HttpException("Email or password invalid", 401);
        }
        //3. Tạo token
        const jti = crypto.randomUUID();
        const token = generateToken({ id: user.id, jti }); //accessToken, refreshToken

        //Lấy exp của refreshToken -> Đổi ra ttl -> Lưu redis
        const { exp: expRefreshToken } = decodeToken(token.refreshToken) as JwtPayload;

        //Đổi ra ttl
        const ttlRefreshToken = Math.ceil(expRefreshToken! - Date.now() / 1000);

        //Lấy exp của accessToken -> Lưu redis -> Phục vụ cho việc thu hồi khi refreshToken
        const { exp: expAccessToken } = decodeToken(token.accessToken) as JwtPayload;

        //Key redis
        const refreshTokenKey = `refreshToken:${user.id}:${jti}`; //Mục tiêu: Thu hồi tất cả refresh của user cụ thể

        //Store redis
        await redis.setex(refreshTokenKey, ttlRefreshToken, JSON.stringify({
            expAccessToken
        }));

        //Gửi email thông báo
        const subject = `Cảnh báo đăng nhập tài khoản ${user.email}`;

        sendMailWithTemplate(user.email, subject, 'notify-login', {
            name: user.name,
            email: user.email,
            now: new Date().toLocaleString()
        })

        return token;
    },
    async logout(jti: string, exp: number, userId: number) {
        const key = `blacklist:${jti}`;
        const ttl = Math.ceil(exp - Date.now() / 1000);
        await redis.setex(key, ttl, "true");

        //Thu hồi refreshToken?
        await redis.del(`refreshToken:${userId}:${jti}`)
    },
    async refreshToken(token: string) {
        //Verify token
        const decoded = verifyRefreshToken(token) as JwtPayload & { id: number };
        if (!decoded) {
            throw new HttpException("Refresh token invalid", 401);
        }
        //Check refresh token on redis
        const refreshTokenKey = `refreshToken:${decoded.id}:${decoded.jti}`
        const refreshTokenOnRedis = await redis.get(refreshTokenKey);
        if (!refreshTokenOnRedis) {
            throw new HttpException("Refresh token invalid", 401);
        }

        //Tạo token mới
        const newJti = crypto.randomUUID();
        const newToken = generateToken({
            id: decoded.id,
            jti: newJti
        });

        //Thêm jti của token mới redis:

        //- Lấy exp của refreshToken -> Đổi ra ttl -> Lưu redis
        const { exp: expRefreshToken } = decodeToken(newToken.refreshToken) as JwtPayload;

        //- Đổi ra ttl
        const ttlRefreshToken = Math.ceil(expRefreshToken! - Date.now() / 1000);

        //- Key redis
        const newRefreshTokenKey = `refreshToken:${decoded.id}:${newJti}`;

        //- Store redis
        await redis.setex(newRefreshTokenKey, ttlRefreshToken, "true");

        //Thu hồi refreshToken cũ
        await redis.del(refreshTokenKey);

        //Thêm accessToken cũ vào blacklist
        const { expAccessToken } = JSON.parse(refreshTokenOnRedis);
        const ttlAccessToken = Math.ceil(expAccessToken - Date.now() / 1000);
        await redis.setex(`blacklist:${decoded.jti}`, ttlAccessToken, 'true');

        return newToken;
    },

    async forgotPassword(email: string) {
        const user = await prisma.user.findUnique({
            where: { email }
        });
        if (!user) {
            throw new HttpException("Email không tồn tại", 404);
        }

        const otp = generateOTP();

        await redis.setex(`otp:${otp}`, 300, JSON.stringify({
            id: user.id
        }));

        const subject = `Mã OTP đặt lại mật khẩu`
        sendMailWithTemplate(user.email, subject, `forgot-password`, {
            name: user.name,
            otp
        })
    },

    async resetPassword(otp: string, password: string) {
        //Check otp có tồn tại trên redis hay không?
        const otpOnRedis = await redis.get(`otp:${otp}`);
        if (!otpOnRedis) {
            throw new HttpException("OTP không hợp lệ", 401);
        }
        const { id } = JSON.parse(otpOnRedis);
        await prisma.user.update({
            where: { id },
            data: {
                password: hashPassword(password)
            }
        });
        await redis.del(`otp:${otp}`);
    }
}

//Route DELETE /auth/logout -> Middleware (Token -> jti) -> Controller -> Service

//jti (JWT ID)

//Blacklist
// - User request logout
// - Lấy jti của token
// - Lưu vào redis với ttl (time to live) bằng với thời gian sống còn lại của token đó để tự động dọn dẹp

//Nguyên tắc của redis: 
// - Lưu dữ liệu theo kiểu key - value (Giống object)
// - Chỉ cấp nhận chuỗi
// - Nếu có ttl: Số giây mong muốn nó sống (Số nguyên)

//Refresh token
// - Khi refresh được tạo (Lưu lại ở server) -> Thu hồi bất kỳ lúc nào vì thời gian dài
// - Khi gọi endpoint /auth/refresh-token: 
// + B1: Verify refresh token có hợp hợp lệ không?
// + B2: Kiểm tra refresh token có tồn tại trên redis không? (Nếu không tồn tại -> Nó đã bị thu hồi -> Từ chối)
// + B3: Tạo accessToken mới, refreshToken mới
// + B4: Thu hồi refreshToken cũ, thêm accessToken cũ vào blacklist

//Kịch bản thêm accessToken vào blacklist khi refreshToken
// - Dấu hiệu chung: JTI cũ
// - Cần lấy được expired của accessToken cũ?

