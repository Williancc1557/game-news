import { getGameNewsUseCase } from "./index";

jest.setTimeout(10000);

it("Should test response return", async () => {
    const req = await getGameNewsUseCase.execute();
    expect(typeof req).toBe("object");
});