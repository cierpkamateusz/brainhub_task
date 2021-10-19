const request = require("supertest");
const { connectDB, clearDB, closeDB } = require("./db");

const app = require("../app");

beforeAll(async () => connectDB());
afterEach(async () => clearDB());
afterAll(async () => closeDB());

describe("test POST /events", () => {
  it("should return http 200 and new event with id", async () => {
    const newEvent = {
      firstName: "Fname",
      lastName: "Lname",
      email: "fname@google.com",
      date: new Date(2022, 2, 2),
    };
    const response = await request(app).post("/events").send(newEvent);
    expect(response.statusCode).toBe(201);
    expect(response.body.data.event._id).toBeDefined();
  });

  it("should return http 400 because of missing field", async () => {
    const newEvent = {
      lastName: "Lname",
      email: "fname@google.com",
      date: new Date(2022, 2, 2),
    };
    const response = await request(app).post("/events").send(newEvent);
    expect(response.statusCode).toBe(400);
    expect(response.text).toContain("firstName is required");
  });

  it("should return http 400 because of wrong email", async () => {
    const newEvent = {
      firstName: "Fname",
      lastName: "Lname",
      email: "fnamegooglecom",
      date: new Date(2022, 2, 2),
    };
    const response = await request(app).post("/events").send(newEvent);
    expect(response.statusCode).toBe(400);
    expect(response.text).toContain("email is not valid");
  });

  it("should return http 404 if no route defined", async () => {
    const undefinedRoute = "/undefined/route";
    const response = await request(app).get(undefinedRoute);
    expect(response.statusCode).toBe(404);
    expect(response.text).toContain(`${undefinedRoute} not found`);
  });
});
