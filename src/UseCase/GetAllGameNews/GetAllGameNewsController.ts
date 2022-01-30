import { pinoConfig } from "../../logger/logger";
import type { GetAllGameNewsUseCase } from "./GetAllGameNewsUseCase";

export class GetAllGameNewsController {
    public constructor(
        private readonly getAllGameNewsUseCase: GetAllGameNewsUseCase
    ) { }

    public async handle(): Promise<object> {
        pinoConfig.debug("handle controller executed");

        const requestsNumber = 10;
        const responseRequest = await this.getAllGameNewsUseCase.execute({ requestsNumber });

        return responseRequest;
    }
}