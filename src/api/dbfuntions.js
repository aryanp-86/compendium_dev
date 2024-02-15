"use server";
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
        awardname varchar(40) NOT NULL,
        awardingbody varchar(40),
        date date NOT NULL,
        type varchar(20) NOT NULL,
        place varchar(20)
    );`;

  const facultyBooks = `
    CREATE TABLE IF NOT EXISTS facultybooks(
      srno serial,
      title TEXT NOT NULL,
      chapter TEXT ,
      pauth TEXT NOT NULL,
      sauth TEXT,
      edition TEXT,
      edited TEXT,
      publisher TEXT ,
      place TEXT,
      date date NOT NULL,
      isbnno TEXT
    )
    `;

  const facultyHIndex = `
  CREATE TABLE IF NOT EXISTS facultyhindex(
    srno serial,
    name varchar(30) NOT NULL,
    googlehindex INT,
    googlecitations INT,
    googlepersonalif INT,
    scopushindex INT,
    scopuscitations INT,
    date date
  );
  `;

  const facultyWorkshops = `
  CREATE TABLE IF NOT EXISTS facultyworkshops(
    srno SERIAL,
    name TEXT,
    type VARCHAR(30),
    sponser TEXT,
    facultyname VARCHAR(30),
    date DATE,
    place VARCHAR(20),
    subject TEXT,
    notracks INT,
    noparticipants INT
  );
  `;

  /**	Organizer of Event	Position won  */
  const studentAwards = `
  CREATE TABLE IF NOT EXISTS studentawards(
    srno SERIAL,
    class TEXT,
    div VARCHAR(5),
    PRN INT,
    name TEXT,
    eventname TEXT,
    members TEXT,
    date DATE,
    organizer TEXT,
    prize TEXT
  )
  `;

  runQuery(studentAwards);
}

async function getFacultyData() {
  const query = `
  SELECT * from facultyawards ORDER BY srno;
  SELECT * from facultybooks ORDER BY srno;
  SELECT * from facultyhindex ORDER BY srno;
  SELECT * from facultyworkshops ORDER BY srno;
  `;
  const res = await runQuery(query);
  return {
    awards: res[0].rows,
    books: res[1].rows,
    hIndex: res[2].rows,
    workshop: res[3].rows,
  };
}
async function getStudentData() {
  const query = `
  SELECT * from studentawards ORDER BY srno;
  `;
  const res = await runQuery(query);
  return {
    awards: res[0].rows,
    books: res[1].rows,
    hIndex: res[2].rows,
    workshop: res[3].rows,
  };
}

export { initiateDB, getFacultyData };
