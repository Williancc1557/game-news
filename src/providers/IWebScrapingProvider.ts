export interface IWebScrapingProvider {
    getNews: () => Promise<object>;
    getAllNews: (requestNumber?: number) => Promise<object>;
}