"use server";

import prisma from "@/lib/db";

export async function getUser(email: string) {
  const user = await prisma.user.findFirst({
    where: {
      emailAddress: email,
      status: "active",
    },
    select: {
      emailAddress: true,
      id: true,
      profile: true,
      isOnline: true,
      username: true,
      Passwords: {
        select: {
          hashedPassword: true,
          salt: true,
        },
        orderBy: {
          createdAt: "desc",
        },
        take: 1,
      },
    },
  });
  return user;
}
