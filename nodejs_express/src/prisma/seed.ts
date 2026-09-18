import { faker } from '@faker-js/faker';

import { prisma } from "../lib/prisma.js";

const main = async () => {
    //Reset data
    await prisma.post.deleteMany({});

    //Insert
    const postData = [...Array(50).keys()].map(() => {
        return {
            title: faker.lorem.sentence({ min: 5, max: 10 }),
            content: faker.lorem.text()
        }
    });
    await prisma.post.createMany({
        data: postData
    });
}

main().then(() => {
    console.log('Seeding success');
    process.exit();
}).catch(() => {
    console.log('Seeding failed');
    process.exit();
})