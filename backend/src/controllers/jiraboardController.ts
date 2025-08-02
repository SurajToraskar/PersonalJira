import { PrismaClient } from "@prisma/client";
import { Request, Response, NextFunction } from "express";
import { ColumnProps } from "../types/jiraboard";
const prisma = new PrismaClient();

export async function getJiraBoardData(req: Request, res: Response) {
  try {
    const getAllColumns = await prisma.refColumns.findMany({
      where: { Deleted: false },
      orderBy: { DisplayOrder: "asc" },
    });

    const columns: ColumnProps[] = getAllColumns.map((column) => {
      return {
        id: column.Id,
        name: column.Name,
        displayOrder: column.DisplayOrder,
      };
    });

    return res.json(columns).status(200);
  } catch (error) {
    console.log(`error-${error}`);
    return res.json({ error }).status(500);
  }
}
