/*
  Warnings:

  - You are about to alter the column `created_at` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `update_at` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.

*/
-- AlterTable
ALTER TABLE `Users` MODIFY `password` VARCHAR(100) NOT NULL,
    MODIFY `created_at` TIMESTAMP NULL,
    MODIFY `update_at` TIMESTAMP NULL;
