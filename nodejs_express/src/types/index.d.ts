import { User } from "../prisma/generated/prisma/client.ts";

declare global {
    namespace Express {
        interface Request {
            user?: Omit<User, "password">,
            jti?: string,
            exp?: number
        }
    }
}