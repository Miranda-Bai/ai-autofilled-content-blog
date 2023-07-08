import { PrismaClient } from "@prisma/client";

let prismaInit: PrismaClient;

if (process.env.NODE_ENV === "production"){
    // in production environment
    prismaInit = new PrismaClient();
} else {
    // in other environments, such as development or test..
    if(!(global as any).prisma){
        (global as any).prisma = new PrismaClient();
    }
    prismaInit = (global as any).prisma;

}

export const prisma = prismaInit;