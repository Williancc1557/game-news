import { app } from "./app";
import { pinoConfig } from "./logger/logger";

const portaLocal = 3000;
const portaHost = process.env.PORT;
const PORTA = portaHost || portaLocal;

app.listen(PORTA, () => {
    pinoConfig.info(`server started using port ${PORTA}`);
});