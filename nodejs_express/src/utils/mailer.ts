import nodemailer from "nodemailer";
import ejs from "ejs";
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST as string,
    port: +process.env.SMTP_PORT!,
    secure: true, //true nếu port = 465, false nếu port = 587
    auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
    },
});

export const sendMail = (to: string, subject: string, message: string) => {
    return transporter.sendMail({
        from: '"Unicode Elearning" <anhoang.unicode@gmail.com>',
        to,
        subject,
        html: message
    });
}

export const sendMailWithTemplate = async (to: string, subject: string, template: string, context?: ejs.Data) => {
    const templatePath = `${process.cwd()}/src/mail/${template}.ejs`;
    const message = await ejs.renderFile(templatePath, context);
    return sendMail(to, subject, message);
}