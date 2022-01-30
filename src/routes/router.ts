import type { Request, Response } from "express";
import { Router } from "express";
import { pinoConfig } from "../logger/logger";
import { allNewsResponse } from "../server";
import { getGameNewsController } from "../UseCase/GetGameNews";

export const router = Router();

router.get("/", async (req: Request, res: Response) => {
    pinoConfig.debug("The router / was started");
    await getGameNewsController.handle(req, res);
});

router.get("/all", async (req: Request, res: Response) => {
    pinoConfig.debug("The router /all was started");
    res.json(allNewsResponse);
});