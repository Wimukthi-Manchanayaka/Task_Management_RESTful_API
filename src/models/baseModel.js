class BaseModel {
    constructor(tableName, db) {
      this.tableName = tableName;
      this.db = db;
    }
  
    // Get all records
    async getAll() {
      const [rows] = await this.db.query(`SELECT * FROM ${this.tableName}`);
      return rows;
    }
  
    // Get a single record by ID
    async getById(id) {
      const [rows] = await this.db.query(
        `SELECT * FROM ${this.tableName} WHERE id = ?`,
        [id]
      );
      return rows.length ? rows[0] : null;
    }
  
    // Create a new record
    async create(data) {
      const [result] = await this.db.query(
        `INSERT INTO ${this.tableName} SET ?`,
        data
      );
      return this.getById(result.insertId);
    }
  
    // Update a record by ID
    async update(id, data) {
      await this.db.query(`UPDATE ${this.tableName} SET ? WHERE id = ?`, [
        data,
        id,
      ]);
      return this.getById(id);
    }
  
    // Delete a record by ID
    async delete(id) {
      await this.db.query(`DELETE FROM ${this.tableName} WHERE id = ?`, [id]);
      return { message: "Record deleted successfully" };
    }
  }
  
  module.exports = BaseModel;
  