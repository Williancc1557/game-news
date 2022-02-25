import pino from "pino";

const logs = pino({
    level: "debug",
    prettyPrint: true,
}) as pino.Logger<pino.LoggerOptions>;

export { logs };