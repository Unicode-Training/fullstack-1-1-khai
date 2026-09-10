import crypto from "crypto";
export const generateOTP = () => {
    const token = crypto.randomInt(0, 1000000);
    return token.toString().padStart(6, '0');
}