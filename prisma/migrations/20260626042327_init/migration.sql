-- CreateTable
CREATE TABLE "Trade" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "symbol" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "lot" REAL NOT NULL,
    "openPrice" REAL NOT NULL,
    "closePrice" REAL NOT NULL,
    "profit" REAL NOT NULL,
    "openTime" DATETIME NOT NULL,
    "closeTime" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
