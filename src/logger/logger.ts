import pino from "pino";

const pinoConfig = pino({
    level: "debug",
    prettyPrint: true,
}) as pino.Logger<pino.LoggerOptions>;

export { pinoConfig };