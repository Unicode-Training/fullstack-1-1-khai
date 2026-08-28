import bcrypt from "bcrypt";
export const hashPassword = (password: string) => {
    return bcrypt.hashSync(password, 12);
}

export const verifyPassword = (hash: string, password: string) => {
    return bcrypt.compareSync(password, hash);
} 