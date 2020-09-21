const mysql = require("mysql");
const inquirer=require("inquirer");
const consoleTable=require("console.table");

var connection = mysql.createConnection({
  ost: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "employee_management_systemDB",
});
