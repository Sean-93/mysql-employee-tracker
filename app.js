//create classes with functions to perform all needed actions here

const inquirer = require("inquirer");
const database = require("./db/index");

function createDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "department",
        message: "Please add a department."
      }
    ])
    .then(function(data) {
      const add = {
        name: data.department
      };
      database.addDepartments(add);
    });
}

function createRole() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "Please add a role title."
      },
      {
        type: "input",
        name: "departmentID",
        message: "Please add a role department ID."
      }
    ])
    .then(function(data) {
      const add = {
        title: data.title,
        department_id: data.departmentID
      };
      database.addRoles(add);
    });
}

function createEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: "Please add the employee's first name."
      },
      {
        type: "input",
        name: "lastName",
        message: "Please add the employee's last name."
      },
      {
        type: "number",
        name: "roleID",
        message: "Please enter the employee's role id."
      },
      {
        type: "input",
        name: "managerID",
        message: "If employee has a manager, enter the manager's ID; if they are the manager, leave blank and enter."
      }
    ])
    .then(function(data) {
      const add = {
        first_name: data.firstName,
        last_name: data.lastName,
        role_id: data.roleID,
    };

    if (data.managerID) {
        add.manager_id = data.managerID;
    }

    database.addEmployees(add);
});
}
// manager_id: data.managerID

async function seeDepartments(){
    const departments = await database.viewDepartments();
    const jsonString = JSON.stringify(departments);
    console.table(JSON.parse(jsonString));
}

async function seeEmployee(){
    const employees = await database.viewAllEmployees();
    const jsonString = JSON.stringify(employees);
    console.table(JSON.parse(jsonString));
}

async function seeRole(){
    const roles = await database.viewRoles();
    const jsonString = JSON.stringify(roles);
    console.table(JSON.parse(jsonString));
}

function start() {
//   createDepartment();
//   seeDepartments();
//   createRole();
//   seeRole();
  seeEmployee();
//   createEmployee();
}
start();
