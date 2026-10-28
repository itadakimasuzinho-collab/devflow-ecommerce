const request = require("supertest");
const app = require("../src/app");

describe("API DevFlow Solutions", () => {

    test("GET / deve retornar status 200", async () => {
        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe(
            "DevFlow Solutions - E-commerce funcionando!"
        );
    });

    test("GET /produtos deve retornar uma lista de produtos", async () => {
        const response = await request(app).get("/produtos");

        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBeGreaterThan(0);
    });

});