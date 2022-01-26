import supertest from "supertest";
import { app } from "../../app";

jest.setTimeout(40000);

describe("Test /all router", () => {
    it("Should test response with requestsNumber seted", async () => {
        const requestsNumber = 3;
        const req = await supertest(app).get("/all").set({
            requestsNumber,
        });
        expect(requestsNumber).toBe(req.body.length);
        expect(typeof req.body).toBe("object");
    });

    it("Should test response with requestsNumber not seted", async () => {
        const req = await supertest(app).get("/all");
        expect(10).toBe(req.body.length);
        expect(typeof req.body).toBe("object");
    });

    it("Should test response with requestsNumber is 0", async () => {
        const requestsNumber = 0;
        const req = await supertest(app).get("/all").set({
            requestsNumber,
        });
        expect(req.body[0]).toBe(undefined);
        expect(typeof req.body).toBe("object");
    });

    it("Should test if response return error", async () => {
        const requestsNumber = 20;
        const req = await supertest(app).get("/all").set({
            requestsNumber,
        });
        console.log(req.body);
        expect(typeof req.body).toBe("object");
    });
});
