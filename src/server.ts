import { app } from "./app";
import { logs } from "./logger/logger";
import { sleep } from "@techmmunity/utils";
import { getAllGameNewsController } from "./UseCase/GetAllGameNews";

const LOCAL = 3000;
const HOST = process.env.PORT;
const PORT = HOST || LOCAL;

export let allNewsResponse: object;

app.listen(PORT, async () => {
    logs.info(`server started using port ${PORT}`);
    const SECONDS = 60;
    const MINUTES = 60;
    const HOURS = 2;

    while (true) {
        const allGameNews = await getAllGameNewsController.handle();

        allNewsResponse = allGameNews;

        logs.info("All news has been getted");

        await sleep(SECONDS * MINUTES * HOURS);
    }
});