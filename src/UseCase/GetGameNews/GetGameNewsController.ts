import type { Request, Response } from "express";
import { logs } from "../../logger/logger";
import type { GetGameNewsUseCase } from "./GetGameNewsUseCase";

export class GetGameNewsController {
    public constructor(
        private readonly getGameNewsUseCase: GetGameNewsUseCase
    ) { }

    public async handle(req: Request, res: Response): Promise<Response> {
        logs.debug("handle controller executed");
        const response = await this.getGameNewsUseCase.execute();
        logs.debug("The news was sended!");
        return res.json(response);
    }
}