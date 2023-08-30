import { Sequelize } from "sequelize";

export const PostgresClient = new Sequelize(
    process.env.DATABASE || "nodeandtypescript",
    process.env.POSTGRES_USER || "postgres",
    process.env.PASSWORD || "9199",
  {
    host: process.env.POSTGRES_URL || "localhost",
    dialect: 'postgres'
  }
);