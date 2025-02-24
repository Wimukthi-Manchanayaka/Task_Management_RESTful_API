const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const { body } = require("express-validator");

router.post('/', [
    body("title").notEmpty().withMessage("Title is required"),
    body("description").notEmpty().withMessage("Description is required"),
    body("status")
      .isIn(["TO_DO", "IN_PROGRESS", "DONE"])
      .withMessage("Invalid status"),

],
taskController.createTask);

router.get('/', taskController.getAllTasks);
router.get('/:id', taskController.getTaskById);

router.put('/:id',[
    body("title").notEmpty().withMessage("Title is required"),
    body("description").notEmpty().withMessage("Description is required"),
    body("status")
      .isIn(["TO_DO", "IN_PROGRESS", "DONE"])
      .withMessage("Invalid status"),
], taskController.updateTask);

router.delete('/:id', taskController.deleteTask);

module.exports = router;
