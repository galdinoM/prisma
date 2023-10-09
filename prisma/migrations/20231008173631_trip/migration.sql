-- CreateTable
CREATE TABLE `trip` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `sobre` VARCHAR(191) NOT NULL,
    `hospedagem` VARCHAR(191) NOT NULL,
    `roteiro` VARCHAR(191) NOT NULL,
    `incluido` VARCHAR(191) NOT NULL,
    `informacoesImportantes` VARCHAR(191) NOT NULL,
    `importancia` VARCHAR(191) NOT NULL,
    `saidaHora` VARCHAR(191) NOT NULL,
    `saidaData` DATETIME(3) NOT NULL,
    `retornoHora` VARCHAR(191) NOT NULL,
    `retornoData` DATETIME(3) NOT NULL,
    `chegada` VARCHAR(191) NOT NULL,
    `preco` DOUBLE NOT NULL,
    `vagas` INTEGER NOT NULL,
    `agencia` VARCHAR(191) NOT NULL,
    `rating` INTEGER NOT NULL,
    `imagemUrl` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
