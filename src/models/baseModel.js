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
      const sql = `SELECT * FROM ${this.tableName} WHERE id = ?`;
  const values = [id];

  const [rows] = await this.db.query(sql, values);
  return rows.length ? rows[0] : null;
    }
  
    // Create a new record
    async create(data) {
      const sql = `INSERT INTO ${this.tableName} (title, description, status) VALUES (?, ?, ?)`;
      const values = [data.title, data.description, data.status];
      
      const [result] = await this.db.query(sql, values);
      return this.getById(result.insertId);
      
    }
  
    // Update a record by ID
    async update(id, data) {
      const sql = `UPDATE ${this.tableName} SET title = ?, description = ?, status = ? WHERE id = ?`;
      const values = [data.title, data.description, data.status, id];
    
      const [result] = await this.db.query(sql, values);
    
      // Check if the update affected any rows
      if (result.affectedRows === 0) {
        return null; // Return null if no rows were updated
      }
    
      return this.getById(id); // Return the updated task
    }
  
    // Delete a record by ID
    async delete(id) {
      const sql = `DELETE FROM ${this.tableName} WHERE id = ?`;
      const [result] = await this.db.query(sql, [id]);
    
      if (result.affectedRows === 0) {
        throw new Error("Delete failed: Record not found");
      }
    
      return result; // Return the delete result for affectedRows check
    }
  }
  
  module.exports = BaseModel;
  