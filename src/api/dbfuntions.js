import { Pool } from "pg";
import "dotenv/config";

async function runQuery(query, values) {
  const connectionString = process.env.NEON;

  const pool = new Pool({
    connectionString: connectionString,
  });

  try {
    const client = await pool.connect();
    const result = await client.query(query, values);
    client.release();
    console.log("Query executed successfully:\n", query, values);
    return result;
  } catch (err) {
    console.error("Error executing query:", err);
    throw err;
  }
}

async function initiateDB() {
  const facultyAwards = `
   CREATE TABLE IF NOT EXISTS facultyawards(
        srno serial,
        name varchar(30) NOT NULL,
        awardname varchar(20) NOT NULL,
        awardingbody varchar(20) NOT NULL,
        date date NOT NULL,
        type varchar(10) NOT NULL,
        place varchar(10)
    );`;

  const facultyBooks = `
    CREATE TABLE IF NOT EXISTS facultybooks(
      srno serial,
      title varchar(30) NOT NULL,
      chapter varchar(30) NOT NULL,
      pauth varchar(30) NOT NULL,
      sauth varchar(30),
      edition varchar(10),
      edited varchar(20),
      publisher varchar(30) NOT NULL,
      place varchar(30),
      date date NOT NULL,
      isbnno varchar(30)
    )
    `;

  runQuery(facultyBooks);
}

export { initiateDB };
