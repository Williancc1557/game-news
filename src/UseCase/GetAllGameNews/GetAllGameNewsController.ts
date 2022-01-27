import type { Request, Response } from "express";
import { pinoConfig } from "../../logger/logger";
import type { GetAllGameNewsUseCase } from "./GetAllGameNewsUseCase";

export class GetAllGameNewsController {
    public constructor(
        private readonly getAllGameNewsUseCase: GetAllGameNewsUseCase
    ) { }

    public async handle(req: Request, res: Response): Promise<Response> {
        pinoConfig.debug("handle controller executed");
        try {
            let requestsNumber = Number(req.header("requestsNumber"));

            if (isNaN(requestsNumber)) requestsNumber = undefined;

            const responseRequest = await this.getAllGameNewsUseCase.execute({ requestsNumber });
            pinoConfig.debug("All news was sends!");
            return res.json(responseRequest);
        } catch (err) {
            const errorMessage = err.message || "unknown error";
            const errorCode = 400;
            pinoConfig.debug("The handler in the controller was for catch error");
            return res.status(errorCode).json(errorMessage);
        }
    }
}