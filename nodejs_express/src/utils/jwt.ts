import jsonwebtoken, { JwtPayload } from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET as string;
const JWT_EXPIRED = process.env.JWT_EXPIRED as unknown as number;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET as string;
const JWT_REFRESH_EXPIRED = process.env.JWT_REFRESH_EXPIRED as unknown as number;
export const generateToken = (payload: JwtPayload) => {
    const accessToken = jsonwebtoken.sign(payload, JWT_SECRET, {
        expiresIn: JWT_EXPIRED
    });
    const refreshToken = jsonwebtoken.sign(payload, JWT_REFRESH_SECRET, {
        expiresIn: JWT_REFRESH_EXPIRED
    })
    return {
        accessToken,
        refreshToken
    }
}

export const verifyAccessToken = (token: string) => {
    try {
        return jsonwebtoken.verify(token, JWT_SECRET);
    } catch {
        return false;
    }
}

export const verifyRefreshToken = (token: string) => {
    try {
        return jsonwebtoken.verify(token, JWT_REFRESH_SECRET);
    } catch {
        return false;
    }
}

//Hàm này có tác dụng decode payload của token
export const decodeToken = (token: string) => {
    return jsonwebtoken.decode(token);
}