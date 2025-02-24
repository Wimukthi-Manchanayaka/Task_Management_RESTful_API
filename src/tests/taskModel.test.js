const db = require("../config/db");
const Task = require("../models/taskModel");

describe("Task Model", () => {
  let createdTaskId;

  test("✅ Should create a new task", async () => {
    const result = await TaskModel.create("Test Task", "Testing", "TO_DO");
    expect(result.insertId).toBeDefined();
    createdTaskId = result.insertId;
  });

  test("✅ Should retrieve all tasks", async () => {
    const tasks = await TaskModel.getAll();
    expect(Array.isArray(tasks)).toBe(true);
  });

  test("✅ Should retrieve a task by ID", async () => {
    const task = await TaskModel.getById(createdTaskId);
    expect(task).toBeDefined();
    expect(task.title).toBe("Test Task");
  });

  test("✅ Should update a task", async () => {
    const result = await TaskModel.update(createdTaskId, "Updated Title", "Updated Description", "DONE");
    expect(result.affectedRows).toBe(1);
  });

  test("✅ Should delete a task", async () => {
    const result = await TaskModel.delete(createdTaskId);
    expect(result.affectedRows).toBe(1);
  });
});

// Close DB connection after tests
afterAll(() => db.end());
