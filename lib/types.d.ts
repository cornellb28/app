import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient;
}

export {};



// https://bobbyhadz.com/blog/typescript-cannot-redeclare-block-scoped-variable#:~:text=The%20error%20%22Cannot%20redeclare%20block,block%20and%20use%20ES%20modules.