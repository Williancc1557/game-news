import express from "express";
import logger from "morgan";
import bodyParser from "body-parser";
import { rateLimitServer, corsConfig } from "./middlewares/middlewares";
import { router } from "./routes/router";

export const app = express();

app.use(bodyParser.json());
app.use(logger("dev"));
app.use(corsConfig);
app.use(rateLimitServer);
app.use("", router);
