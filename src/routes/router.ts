import type { Request, Response } from "express";
import { Router } from "express";
import { pinoConfig } from "../logger/logger";
import { getGameNewsController } from "../UseCase/GetGameNews";

export const router = Router();

router.get("/", async (req: Request, res: Response) => {
    pinoConfig.debug("Rota / inicializada");
    await getGameNewsController.handle(req, res);
});