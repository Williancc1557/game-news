import { CheerioProvider } from "../../providers/implements/CheerioProvider";
import { GetGameNewsController } from "./GetGameNewsController";
import { GetGameNewsUseCase } from "./GetGameNewsUseCase";

const cheerioProvider = new CheerioProvider("https://www.theenemy.com.br/news");

const getGameNewsUseCase = new GetGameNewsUseCase(cheerioProvider);

export const getGameNewsController = new GetGameNewsController(getGameNewsUseCase);