export interface IWebScrapingProvider {
    getFirstHrefNew: (url: string) => Promise<string>;
    getNew: () => Promise<object>;
}