import { logs } from "../../logger/logger";
import type { IWebScrapingProvider } from "../../providers/IWebScrapingProvider";

export class GetGameNewsUseCase {
    public constructor(
        private readonly webScraping: IWebScrapingProvider
    ) { }

    public async execute() {
        logs.debug("Get game UseCase execute");
        const response = await this.webScraping.getNews();
        return response;
    }
}