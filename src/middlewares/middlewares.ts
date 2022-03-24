import rateLimit from "express-rate-limit";
import cors from "cors";
import { app } from "../app";
import type { NextFunction, Request, Response } from "express";

const rateLimitMinutes = 15;
const rateLimitSeconds = 60;
const rateLimitMiliseconds = 1000;

export const rateLimitServer = rateLimit({
    windowMs: rateLimitMinutes * rateLimitSeconds * rateLimitMiliseconds,
    max: 100,
    message:
        "Muitas requisições foram solicitadas nesse IP, por favor, aguarde 15 minutos",
});

export const corsConfig = (req: Request, res: Response, next: NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET");
    app.use(cors());
    next();
};