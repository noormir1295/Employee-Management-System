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

//Valaditing string response is not a number 
function validateString(answer) {
    if (answer != "" && isNaN(parseInt(answer))) {
        return true;
    }
    return false;
}
//Validating number result is not a string 
function validateNumber(answer) {
    if (answer != "" && !isNaN(parseInt(answer))) {
        return true;
    }
    return false;
}
// Main propt to find out what the user would like to do, uses switch case after to continue. 
function main() {
    inquirer.prompt([
        {
            type: "list",
            name: "mainMenu",
            message: "Select an option:",
            choices: [
                "View All Employees",  
                "View All Roles", 
                "View All Departments", 
                "Add An Employee", 
                "Add A Role",  
                "Add A Department",  
                "Update Employee Role // Assign Manager to Employee"  
            ]
        }
    ]).then(function (answer) {
        switch (answer.mainMenu) {
            //Shows all Employess 
            case "View All Employees":
                var query = connection.query("SELECT * FROM employee", function (err, data) {
                    if (err) throw err;
                    console.table(data);
                    continuePrompt();
                });
                break;
            //Shows all departments 
            case "View All Departments":
                var query = connection.query("SELECT * FROM department", function (err, data) {
                    if (err) throw err;
                    console.table(data);
                    continuePrompt();
                });
                break;
            //Shows all roles 
            case "View All Roles":
                var query = connection.query("SELECT * FROM role", function (err, data) {
                    if (err) throw err;
                    console.table(data);
                    continuePrompt();
                });
                break;