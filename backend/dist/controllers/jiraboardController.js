"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJiraBoardData = getJiraBoardData;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function getJiraBoardData(req, res) {
    try {
        const getAllColumns = await prisma.refColumns.findMany({
            where: { Deleted: false },
            orderBy: { DisplayOrder: "asc" },
        });
        const columns = getAllColumns.map((column) => {
            return {
                id: column.Id,
                name: column.Name,
                displayOrder: column.DisplayOrder,
            };
        });
        return res.json(columns).status(200);
    }
    catch (error) {
        console.log(`error-${error}`);
        return res.json({ error }).status(500);
    }
}
