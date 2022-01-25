import cheerio from "cheerio";
import type { IWebScrapingProvider } from "../IWebScrapingProvider";
import axios from "axios";
import { pinoConfig } from "../../logger/logger";
export class CheerioProvider implements IWebScrapingProvider {
    public constructor(
        private readonly urlWebSite: string,
    ) { }

    public async getFirstHrefNew(): Promise<string> {
        pinoConfig.debug("get first href new executed");
        const { data } = await axios.get(this.urlWebSite);

        const $ = cheerio.load(data);

        const linkNews = { href: "" };

        const firstNewUrl = 0;

        $(".card__image__anchor").each((index: number, element: cheerio.Element) => {
            const href = $(element).attr("href");
            if (index == firstNewUrl) {
                linkNews.href = href;
            }
        });

        return linkNews.href;
    }

    public async getNew(): Promise<object> {
        pinoConfig.debug("get new web scraping execute");
        const newResponse = {
            title: "",
            paragraphs: [],
        };

        const hrefNews = await this.getFirstHrefNew();
        const { data } = await axios.get(this.urlWebSite + hrefNews);

        const $ = cheerio.load(data);

        const locateTitle = 1;

        newResponse.title = $("title").text().match(/(?:(?:\n)*)(.*)/)[locateTitle];

        $(".main-content__wrapper").find("p").each((index: number, element: cheerio.Element) => {
            newResponse.paragraphs.push($(element).text());
        });

        return newResponse;
    }
}