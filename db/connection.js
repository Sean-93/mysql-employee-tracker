const mysql = require("mysql");
const util = require("util");
const fs = require("fs");
const path = require("path");


const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "employee_tracker_db"
  });

  connection.connect((err)=> {
    if (err) throw err
    // else console.log("connection successful!");
    // const createSchema = fs.readFileSync(path.join(__dirname, "./schema.sql"), "utf8");
    // console.log(createSchema);
    // connection.query(createSchema, (err, result) =>{
    //   if (err) throw err
    //   console.log(result);
      
    // })
  });
  connection.query = util.promisify(connection.query);

  module.exports = connection;

