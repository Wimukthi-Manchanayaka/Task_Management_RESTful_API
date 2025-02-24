const db = require("../config/db");

test("✅ Database should be connected", async () => {
  const [rows] = await db.execute("SELECT 1");
  expect(rows.length).toBeGreaterThan(0);
});

// Close DB connection after tests
afterAll(() => db.end());
