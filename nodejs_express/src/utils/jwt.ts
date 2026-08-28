import jsonwebtoken, { JwtPayload } from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET as string;
const JWT_EXPIRED = process.env.JWT_EXPIRED as unknown as number;
export const generateToken = (payload: JwtPayload) => {
    const accessToken = jsonwebtoken.sign(payload, JWT_SECRET, {
        expiresIn: JWT_EXPIRED
    })
    return {
        accessToken
    }
}

export const verifyAccessToken = (token: string) => {
    try {
        return jsonwebtoken.verify(token, JWT_SECRET);
    } catch {
        return false;
    }
}