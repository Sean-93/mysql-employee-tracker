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
  });
  connection.query = util.promisify(connection.query);

  module.exports = connection;

