import type { Request, Response } from "express";
import { pinoConfig } from "../../logger/logger";
import type { GetGameNewsUseCase } from "./GetGameNewsUseCase";

export class GetGameNewsController {
    public constructor(
        private readonly getGameNewsUseCase: GetGameNewsUseCase
    ) { }

    public async handle(req: Request, res: Response): Promise<Response> {
        pinoConfig.debug("handle controller executed");
        const response = await this.getGameNewsUseCase.execute();
        return res.json(response);
    }
}