import z from "zod";
import emailBlacklist from "../email-blacklist.json" with { type: "json" };
export const createUserSchema = z.object({
    name: z.string({ error: "Tên phải là chuỗi" }).min(1, "Tên không được bỏ trống").refine((value: string) => {
        //Quy tắc: return true -> passed
        return value === value.toUpperCase()
    }, "Tên phải viết HOA").transform((value) => value.trim()),
    email: z.string({ error: "Email phải là chuỗi" }).min(1, "Email không được bỏ trống").pipe(z.email("Email không đúng định dạng")).refine((value) => {
        return !emailBlacklist.includes(value);
    }, "Email không được phép"),
    bio: z.string().optional().nullable(),
    website: z.string("Website phải là chuỗi").min(1, "Website không được để trống").pipe(z.url("Địa chỉ website không hợp lệ")),
    age: z.number({ error: "Tuổi phải là số nguyên" }).min(18, "Tuổi phải từ 18").max(30, "Tuổi không được vượt quá 30"),
    status: z.enum(["active", "inactive"], "Status chỉ chấp nhận active, inactive"),
    isVerified: z.union([
        z.string().transform((value) => {
            if (value === "true") {
                return true;
            }
            if (value === "false") {
                return false;
            }
            //return undefined
        }),
        z.boolean("isVerified chỉ chấp nhận true, false")
    ]).pipe(z.boolean({ error: "isVerified chỉ chấp nhận true, false" })),
    categories: z.array(z.number("Các phần tử phải là số"), "Chỉ chấp nhận mảng số").min(1, "Mảng phải có ít nhất 1 phần tử"),
    meta: z.object({
        x: z.number("x phải là số")
    }, "Meta chỉ nhận object"),
    password: z.string({ error: "Password phải là chuỗi" }).min(1, "Password không được để trống"),
    confirmPassword: z.string({ error: "confirmPassword phải là chuỗi" }).min(1, "confirmPassword không được để trống"),
    createdAt: z.iso.datetime("Định dạng thời gian không hợp lệ").transform((value) => new Date(value))
}).refine(({ password, confirmPassword }) => {
    return password === confirmPassword;
}, {
    message: "confirmPassword không khớp",
    path: ["confirmPassword"]
});

//Mục tiêu:
// - Khai báo các rule tương ứng
// - Bắt đầu bằng kiểu dữ liệu

//Bài tập: 
//Trường email không cho phép sử dụng các email sau: admin@gmail.com, chinhphu@gmail.com, administrator@gmail.com