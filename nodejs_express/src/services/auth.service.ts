import { HttpException } from "../exceptions/http.exception.js";
import { prisma } from "../lib/prisma.js";
import { LoginData, RegisterData } from "../types/auth.type.js";
import { hashPassword, verifyPassword } from "../utils/hash.js";
import { generateToken } from "../utils/jwt.js";

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
        const token = generateToken({ id: user.id });
        return token;
    }
}