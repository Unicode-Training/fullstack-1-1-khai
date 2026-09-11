import { prisma } from "../lib/prisma.js";
import { fibonacciQueue } from "../queue/fibonacci.queue.js";

export const demoService = {
    async calcFibonacci(n: number) {
        // fibonacciQueue.add("calc-fibonacci", n);
        fibonacciQueue.add('test-multi-worker', Math.random());
    },

    getFinacciAndSaveDB(n: number) {
        const fibonacci = (n: number): number => {
            if (n === 1 || n === 2) {
                return 1;
            }
            return fibonacci(n - 1) + fibonacci(n - 2);
        }

        const result = fibonacci(n);

        return prisma.fibonacci.create({
            data: {
                index: n,
                result
            }
        })
    }
}