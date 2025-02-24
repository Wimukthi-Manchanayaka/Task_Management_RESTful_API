const request = require("supertest");
const app = require("../app");
const db = require("../config/db");

describe("Task API Routes", () => {
  let createdTaskId;

  test("✅ Should create a new task", async () => {
    const res = await request(app).post("/api/tasks").send({
      title: "Unit Test Task",
      description: "Testing task creation",
      status: "TO_DO"
    });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");
    createdTaskId = res.body.id;
  });

  test("✅ Should fetch all tasks", async () => {
    const res = await request(app).get("/api/tasks");
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  test("✅ Should fetch a single task by ID", async () => {
    const res = await request(app).get(`/api/tasks/${createdTaskId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe("Unit Test Task");
  });

  test("✅ Should update a task", async () => {
    const res = await request(app).put(`/api/tasks/${createdTaskId}`).send({
      title: "Updated Task",
      description: "Updated description",
      status: "IN_PROGRESS"
    });

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Task updated successfully");
  });

  test("✅ Should delete a task", async () => {
    const res = await request(app).delete(`/api/tasks/${createdTaskId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Task deleted successfully");
  });
});

// Close DB connection after tests
afterAll(() => db.end());
