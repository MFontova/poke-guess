/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `Pokemon` table. All the data in the column will be lost.
  - Added the required column `largeImageUrl` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `smallImageUrl` to the `Pokemon` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pokemon" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "height" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,
    "type1" TEXT NOT NULL,
    "type2" TEXT,
    "smallImageUrl" TEXT NOT NULL,
    "largeImageUrl" TEXT NOT NULL
);
INSERT INTO "new_Pokemon" ("height", "id", "name", "type1", "type2", "weight") SELECT "height", "id", "name", "type1", "type2", "weight" FROM "Pokemon";
DROP TABLE "Pokemon";
ALTER TABLE "new_Pokemon" RENAME TO "Pokemon";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
