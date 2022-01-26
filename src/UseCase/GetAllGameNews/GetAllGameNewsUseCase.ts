import { pinoConfig } from "../../logger/logger";
import type { CheerioProvider } from "../../providers/implements/CheerioProvider/CheerioProvider";
import type { IGetAllGameNewsDTO } from "./GetAllGameNewsDTO";

export class GetAllGameNewsUseCase {
    public constructor(
        private readonly cheerioProvider: CheerioProvider
    ) { }

    public async execute(data: IGetAllGameNewsDTO) {
        pinoConfig.debug("Get All Game UseCase execute");
        return this.cheerioProvider.getAllNews(data.requestsNumber);
    }
}