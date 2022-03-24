import axios from "axios";
import { logs } from "../../../logger/logger";
import cheerio from "cheerio";
import type { News } from "../../../entities/news";
export class GetNews {
    public async getAllHrefNewsFunction(urlWebSite: string) {
        logs.debug("get first href new executed");

        const { data } = await axios.get(urlWebSite);

        const linkAllNews: Array<string> = [];
        const $ = cheerio.load(data);

        $(".news-list__item__image").each((index: number, element: cheerio.Element) => {
            const href = $(element).attr("href");
            linkAllNews.push(href);
        });

        return linkAllNews;
    }

    private prefixHttpExists(allLinks: Array<string>): Array<string> {
        const links = [];

        for (let i = 1; allLinks.length > i; i++) {
            if (allLinks[i].includes("https://")) {
                links.push(allLinks[i]);
            }
            else {
                links.push("https://www.theenemy.com.br/" + allLinks[i]);
            }
        }
        return links;
    }

    public async getAllNewsFunction(allLinks: Array<string>, newsRequests: number): Promise<Array<News>> {
        const news: Array<News> = [];
        const links = this.prefixHttpExists(allLinks);

        logs.debug("The links has been generated!");

        const maxNewsRequests = 10;

        if (maxNewsRequests < newsRequests) {
            throw new Error(`Should send only ${maxNewsRequests} requests`);
        }

        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        for (let i = 1; allLinks.length + 1 > i; i++) {
            try {
                if (i <= newsRequests) {
                    const { data } = await axios.get(links[i]);

                    const $ = cheerio.load(data);

                    const TITLE = 1;
                    const titleNews: string = $("title").text().match(/(?:(?:\n)*)(.*)/)[TITLE];

                    const paragraphsNews: Array<string> = [];
                    $(".main-content__wrapper").find("p").each((index: number, element: cheerio.Element): void => {
                        paragraphsNews.push($(element).text());
                    });

                    const firstParagraph = 0;
                    if (!paragraphsNews[firstParagraph]) {
                        newsRequests++;
                        throw new Error("Paragraphs not found");
                    }

                    news.push({
                        title: titleNews,
                        paragraphs: paragraphsNews,
                    });
                } else {
                    break;
                }
            } catch { }
        }

        return news;
    }
}