"use server";

import { prisma } from "@/server/lib/prisma";

export async function dbTest() {
  const users = await prisma.user.findMany();
  console.log("Here are the users: ", users);
}
