/*
  Warnings:

  - Added the required column `salt` to the `Password` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Password" ADD COLUMN     "salt" TEXT NOT NULL;
