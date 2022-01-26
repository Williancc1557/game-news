import axios from "axios";
import { pinoConfig } from "../../../logger/logger";
import cheerio from "cheerio";


const defaultRequestsNews = 10;
export const getAllNewsFunction = async (allHrefs: Array<string>, newsRequestsNumber = defaultRequestsNews): Promise<object> => {
    const linksComplet = [];
    const news = [];


    for (let i = 1; allHrefs.length > i; i++) {

        if (allHrefs[i].includes("https://")) linksComplet.push(allHrefs[i]);
        else linksComplet.push("https://www.theenemy.com.br/" + allHrefs[i]);
    }
    pinoConfig.debug("links generateds");

    const maxNewsRequests = 10;

    if (maxNewsRequests < newsRequestsNumber) throw new Error(`Should send only ${maxNewsRequests} requests`);

    // eslint-disable-next-line @typescript-eslint/no-magic-numbers 
    for (let i = 1; allHrefs.length + 1 > i; i++) {
        try {
            if (i <= newsRequestsNumber) {
                const { data } = await axios.get(linksComplet[i]);

                const $ = cheerio.load(data);

                const locateTitle = 1;
                const paragraphsNews = [];
                const titleNews = $("title").text().match(/(?:(?:\n)*)(.*)/)[locateTitle];


                $(".main-content__wrapper").find("p").each((index: number, element: cheerio.Element) => {
                    paragraphsNews.push($(element).text());
                });

                const firstParagraph = 0;
                if (paragraphsNews[firstParagraph] == undefined) {
                    newsRequestsNumber++;
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
};

export const getAllHrefNewsFunction = async (urlWebSite: string) => {
    pinoConfig.debug("get first href new executed");

    const { data } = await axios.get(urlWebSite);

    const $ = cheerio.load(data);

    const linkAllNews: Array<string> = [];

    $(".news-list__item__image").each((index: number, element: cheerio.Element) => {
        const href = $(element).attr("href");
        linkAllNews.push(href);
    });

    return linkAllNews;
};

