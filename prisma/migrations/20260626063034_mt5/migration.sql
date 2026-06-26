/*
  Warnings:

  - You are about to drop the column `closePrice` on the `Trade` table. All the data in the column will be lost.
  - You are about to drop the column `closeTime` on the `Trade` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Trade` table. All the data in the column will be lost.
  - You are about to drop the column `lot` on the `Trade` table. All the data in the column will be lost.
  - You are about to drop the column `openPrice` on the `Trade` table. All the data in the column will be lost.
  - You are about to drop the column `openTime` on the `Trade` table. All the data in the column will be lost.
  - You are about to alter the column `type` on the `Trade` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - Added the required column `price` to the `Trade` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ticket` to the `Trade` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `Trade` table without a default value. This is not possible if the table is not empty.
  - Added the required column `volume` to the `Trade` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Trade" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ticket" BIGINT NOT NULL,
    "symbol" TEXT NOT NULL,
    "type" INTEGER NOT NULL,
    "volume" REAL NOT NULL,
    "price" REAL NOT NULL,
    "profit" REAL NOT NULL,
    "time" BIGINT NOT NULL
);
INSERT INTO "new_Trade" ("id", "profit", "symbol", "type") SELECT "id", "profit", "symbol", "type" FROM "Trade";
DROP TABLE "Trade";
ALTER TABLE "new_Trade" RENAME TO "Trade";
CREATE UNIQUE INDEX "Trade_ticket_key" ON "Trade"("ticket");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
