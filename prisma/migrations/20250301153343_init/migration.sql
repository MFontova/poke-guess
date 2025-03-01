-- CreateTable
CREATE TABLE "Pokemon" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "height" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,
    "type1" TEXT NOT NULL,
    "type2" TEXT,
    "smallImageUrl" TEXT NOT NULL,
    "largeImageUrl" TEXT NOT NULL,
    "generation" INTEGER,

    CONSTRAINT "Pokemon_pkey" PRIMARY KEY ("id")
);
