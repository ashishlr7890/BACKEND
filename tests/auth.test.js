import request from "supertest";
import { describe, it, expect, beforeAll, afterAll } from "vitest";
import mongoose from "mongoose";
import app from "../server"; // Adjust path if needed

let token = "";
let userId = "";

// Before all tests: connect DB
beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

// After all tests: disconnect DB
afterAll(async () => {
  await mongoose.disconnect();
});

describe("Auth API Endpoints", () => {
  it("should register a user", async () => {
    const res = await request(app)
      .post("/api/v1/signup")
      .send({
        name: "Test User",
        email: "testuser@example.com",
        password: "password123",
      });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("user");
    userId = res.body.user._id;
  });

  it("should login user and return JWT token", async () => {
    const res = await request(app)
      .post("/api/v1/signin")
      .send({
        email: "testuser@example.com",
        password: "password123",
      });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("token");
    token = res.body.token;
  });

  it("should update user details", async () => {
    const res = await request(app)
      .put("/api/v1/update")
      .set("Authorization", `Bearer ${token}`)
      .send({
        name: "Updated User",
      });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("updateUser");
    expect(res.body.updateUser.name).toBe("Updated User");
  });

  it("should delete user", async () => {
    const res = await request(app)
      .delete("/api/v1/delete")
      .set("Authorization", `Bearer ${token}`);

    expect(res.status).toBe(200);
    expect(res.body.message).toBe("user is deleted successfully");
  });
});
