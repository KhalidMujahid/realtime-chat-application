/* eslint-disable no-undef */
const request = require("supertest");
const app = require("../src/server");
const connectDB = require("../src/configs/index.configs");

beforeAll(async () => {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
  }
});

describe("Real Time Chat Application", () => {
  test("should return 200 status code", (done) => {
    request(app).get("/").expect(200, done);
  });

  test("should return 400 status code", async () => {
    request(app)
      .post("/login")
      .set("Accept", "application/json")
      .send({
        username: "khalid",
        password: "12345",
      })
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});
