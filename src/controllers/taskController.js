const TaskModel = require("../models/taskModel");
const { validationResult } = require("express-validator");

// Create a new task
exports.createTask = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const task = await TaskModel.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all tasks
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.getAll();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a task by ID
exports.getTaskById = async (req, res) => {
  try {
    const task = await TaskModel.getById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });

    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a task
exports.updateTask = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const updatedTask = await TaskModel.update(req.params.id, req.body);

    // If the update operation didn't return a valid task, return 404
    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found or not updated" });
    }

    res.status(200).json({ message: "Task updated successfully", updatedTask });
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


// Delete a task
exports.deleteTask = async (req, res) => {
  try {
    await TaskModel.delete(req.params.id);
    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
