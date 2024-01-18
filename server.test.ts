import sequelize from "./config/database";
import { connect } from "./server";

describe("Database Connection Test", () => {
  beforeAll(async () => {
    // Connect to the database before running tests
    await connect();
  });

  afterAll(async () => {
    // Close the database connection after all tests
    await sequelize.close();
  });

  it("should connect to the database successfully", () => {
    // The connect function should not throw an error
    expect(connect).not.toThrow();
  });
});
