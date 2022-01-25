import supertest from "supertest";
import { app } from "../../app";

it("Should test response return", async () => {
    const req = await supertest(app).get("/");
    expect(typeof req.body).toBe("object");
});