const db = require("../config/db");
const TaskModel = require("../models/taskModel");
const request = require("supertest"); // ✅ Import supertest

describe("Task Model", () => {
  let createdTaskId;

  test("✅ Should create a new task", async () => {
    const testTask = { title: "Test Task 3", description: "Testing", status: "TO_DO" };
    const result = await TaskModel.create(testTask);

    expect(result.id).toBeDefined(); // Ensure the task is created
    createdTaskId = result.id;
  });

  test("✅ Should retrieve all tasks", async () => {
    const tasks = await TaskModel.getAll();
    expect(Array.isArray(tasks)).toBe(true);
  });

  test("✅ Should retrieve a task by ID", async () => {
    const task = await TaskModel.getById(createdTaskId);
    expect(task).toBeDefined();
    expect(task.title).toBe("Test Task 3");
  });

  test("✅ Should update a task", async () => {
    const updatedData = { title: "Updated Task", description: "Updated description", status: "IN_PROGRESS" };

    const result = await TaskModel.update(createdTaskId, updatedData);
  
    expect(result).not.toBeNull(); // Ensure the result is not null
    expect(result.id).toBe(createdTaskId);
    expect(result.title).toBe(updatedData.title);
    expect(result.description).toBe(updatedData.description);
    expect(result.status).toBe(updatedData.status);
  });


  test("✅ Should delete a task", async () => {
    const result = await TaskModel.delete(createdTaskId);
    expect(result.affectedRows).toBe(1);
  });
});

// Close DB connection after tests
afterAll(() => db.end());
