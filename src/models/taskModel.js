const BaseModel = require("./baseModel");
const db = require("../config/db");

class TaskModel extends BaseModel {
  constructor() {
    super("tasks", db); // Pass table name and database connection
  }

  async getAll(status) {
    if (status) {
      return this.db.query(`SELECT * FROM ${this.tableName} WHERE status = ?`, [
        status,
      ]);
    }
    return super.getAll(); // Call the original method from BaseModel
  }
}

module.exports = new TaskModel();
