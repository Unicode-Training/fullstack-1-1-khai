import { prisma } from "../lib/prisma.js"

export const courseService = {
    create(courseData: { name: string, price: number }) {
        return prisma.course.create({
            data: courseData
        })
    }
}