import { logs } from "../../logger/logger";
import type { GetAllGameNewsUseCase } from "./GetAllGameNewsUseCase";

export class GetAllGameNewsController {
    public constructor(
        private readonly getAllGameNewsUseCase: GetAllGameNewsUseCase
    ) { }

    public async handle(): Promise<object> {
        logs.debug("handle controller executed");

        const responseRequest = await this.getAllGameNewsUseCase.execute({ requestsNumber: 10 });

        return responseRequest;
    }
}