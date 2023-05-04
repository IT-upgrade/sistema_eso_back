/*
  Warnings:

  - The values [ADIMIN] on the enum `UsersRole` will be removed. If these variants are still used in the database, this will fail.
  - Changed the type of `criacao` on the `usuarios` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "UsersRole_new" AS ENUM ('USER', 'ADMIN', 'SUPER');
ALTER TABLE "usuarios" ALTER COLUMN "roles" DROP DEFAULT;
ALTER TABLE "usuarios" ALTER COLUMN "roles" TYPE "UsersRole_new" USING ("roles"::text::"UsersRole_new");
ALTER TYPE "UsersRole" RENAME TO "UsersRole_old";
ALTER TYPE "UsersRole_new" RENAME TO "UsersRole";
DROP TYPE "UsersRole_old";
ALTER TABLE "usuarios" ALTER COLUMN "roles" SET DEFAULT 'USER';
COMMIT;

-- AlterTable
ALTER TABLE "usuarios" DROP COLUMN "criacao",
ADD COLUMN     "criacao" TIMESTAMP(3) NOT NULL;
