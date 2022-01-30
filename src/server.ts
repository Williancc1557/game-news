import { app } from "./app";
import { pinoConfig } from "./logger/logger";
import { sleep } from "@techmmunity/utils";
import { getAllGameNewsController } from "./UseCase/GetAllGameNews";

const portaLocal = 3000;
const portaHost = process.env.PORT;
const PORTA = portaHost || portaLocal;

export let allNewsResponse: object;

app.listen(PORTA, async () => {
    pinoConfig.info(`server started using port ${PORTA}`);
    const seconds = 60;
    const minutes = 60;
    const hours = 2;

    while (true) {
        const allGameNewsController = await getAllGameNewsController.handle();

        allNewsResponse = allGameNewsController;

        pinoConfig.info("The all news was getted");

        await sleep(seconds * minutes * hours);
    }
});