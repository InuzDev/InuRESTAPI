import { describe, it, expect } from "vitest";
import request from "supertest";
import { app } from "../app.ts";

describe("GET /", () => {
   it("responds with Helo World", async () => {
      const res = await request(app).get("/");
      expect(res.status).toBe(200);
      expect(res.text).toBe("Hello World");
   });
});
