import express from "express";
import mysql, { ConnectionOptions } from "mysql2/promise";
import dotenv from "dotenv";

const app = express();
const PORT = 8080;

dotenv.config();

const dbConfig: ConnectionOptions = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: parseInt(process.env.DB_PORT || "3306", 10), // 数値に変換し、デフォルト値を指定
};

app.get("/", async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    await connection.ping();
    connection.end();
    res.send("MySQL connection successful!");
  } catch (error: any) {
    res.status(500).send("Failed to connect to MySQL: " + error.message);
  }
  // res.send("Hello, Express with TypeScript!");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
