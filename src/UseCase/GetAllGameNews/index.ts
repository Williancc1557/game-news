import { CheerioProvider } from "../../providers/implements/CheerioProvider/CheerioProvider";
import { GetAllGameNewsController } from "./GetAllGameNewsController";
import { GetAllGameNewsUseCase } from "./GetAllGameNewsUseCase";

const cheerioProvider = new CheerioProvider("https://www.theenemy.com.br/");

const getAllGameNewsUseCase = new GetAllGameNewsUseCase(cheerioProvider);

export const getAllGameNewsController = new GetAllGameNewsController(getAllGameNewsUseCase);