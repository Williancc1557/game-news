import { getAllGameNewsUseCase } from ".";

jest.setTimeout(20000);

describe("Test /all router", () => {
    it("Should test if response from /all router is valid", async () => {
        const requestsNumber = 10;
        const req = await getAllGameNewsUseCase.execute({ requestsNumber });

        expect(typeof req).toBe("object");
    });
});
