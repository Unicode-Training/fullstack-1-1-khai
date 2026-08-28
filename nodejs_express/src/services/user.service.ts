import { prisma } from "../lib/prisma.js";
import { Course } from "../prisma/generated/prisma/client.js";

// import fs from "fs";
type UserData = {
    id: number;
    name: string;
    email: string;
    phone: string;
    status: boolean;
    password: string;
}
export const userService = {
    findAll({ phone }: { phone: string }) {
        return prisma.user.findMany({
            // select: {
            //     id: true,
            //     name: true,
            //     email: true,
            //     phone: true
            // },
            where: {
                ...(phone ? {
                    phone: {
                        phone: {
                            contains: phone
                        }
                    }
                } : {})

            },
            include: {
                phone: true
            }
        });
    },
    create({ phone, ...userData }: UserData) {
        return prisma.user.create({
            data: {
                ...userData,
                ...(phone ? {
                    phone: {
                        create: {
                            phone,
                        }
                    }
                } : {})
            }
        })
    },
    update({ phone, ...userData }: UserData, id: number) {
        return prisma.user.update({
            where: {
                id
            },
            include: {
                phone: true
            },
            data: {
                ...userData,
                ...(phone ? {
                    phone: {
                        // update: {
                        //     phone,
                        // }
                        upsert: {
                            where: {
                                userId: id
                            },
                            update: {
                                phone
                            },
                            create: {
                                phone
                            }
                        }
                    }
                } : {})
            }
        })
    },

    async delete(id: number) {
        const user = await prisma.user.findUnique({
            where: { id }
        })
        await prisma.$transaction([
            prisma.phone.delete({
                where: {
                    userId: id
                }
            }),
            prisma.user.delete({
                where: { id }
            })
        ]);
        return user;
    },

    async addCourse(userId: number, courseIds: number[]) {
        return prisma.userCourse.createMany({
            data: courseIds.map(courseId => ({
                userId,
                courseId
            }))
        });
    },

    async getCourses(userId: number) {
        const userData = await prisma.user.findUnique({
            where: {
                id: userId
            },
            include: {
                userCourses: {
                    include: {
                        course: true
                    }
                }
            }
        });
        if (!userData) {
            return;
        }
        const { userCourses, ...user } = userData;
        return {
            ...user,
            courses: userCourses.map(({ course }: { course: Course }) => ({
                ...course
            }))
        }
    },
    async deleteCourses(userId: number, courseIds: number[]) {
        return prisma.userCourse.deleteMany({
            where: {
                userId,
                courseId: {
                    in: courseIds
                }
            }
        })
    }
}