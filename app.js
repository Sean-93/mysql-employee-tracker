//create classes with functions to perform all needed actions here

const inquirer = require("inquirer");
const database = require("./db/index");

async function decideAction() {
  const { answerChoice } = await inquirer.prompt([
    {
      type: "list",
      name: "answerChoice",
      message: "What action would you like to make?",
      choices: [
        { name: "Add departments", value: "addDepartments" },
        { name: "Add roles", value: "addRoles" },
        { name: "Add employees", value: "addEmployees" },
        { name: "View departments", value: "viewDepartments" },
        { name: "View roles", value: "viewRoles" },
        { name: "View employees", value: "viewEmployees" },
        { name: "Update employee roles", value: "updateEmployeeRole" },
        { name: "Quit application", value: "quitApplication" }
      ]
    }
  ]);
  console.log(answerChoice);

  switch (answerChoice) {
    case "addDepartments":
      return createDepartment();
    case "addRoles":
      return createRole();
    case "addEmployees":
      return createEmployee();
    case "viewDepartments":
      return viewDepartments();
    case "viewRoles":
      return seeRole();
    case "viewEmployees":
      return seeEmployees();
    case "updateEmployeeRole":
      return updateEmployeeRole();
    default:
    // return quitApplicaton();
  }
}

// * The command-line application should allow users to:

//   * Add departments, roles, employees

//   * View departments, roles, employees

//   * Update employee roles

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
      decideAction();
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
      decideAction();
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
        message:
          "If employee has a manager, enter the manager's ID; if they are the manager, leave blank and enter."
      }
    ])
    .then(function(data) {
      const add = {
        first_name: data.firstName,
        last_name: data.lastName,
        role_id: data.roleID
      };

      if (data.managerID) {
        add.manager_id = data.managerID;
      }

      database.addEmployees(add);
      decideAction();
    });
}
// manager_id: data.managerID

async function seeDepartments() {
  const departments = await database.viewDepartments();
  const jsonString = JSON.stringify(departments);
  console.table(JSON.parse(jsonString));
  decideAction();
}

async function seeEmployees() {
  const employees = await database.viewAllEmployees();
  const jsonString = JSON.stringify(employees);
  console.table(JSON.parse(jsonString));
  decideAction();
}

async function seeRole() {
  const roles = await database.viewRoles();
  const jsonString = JSON.stringify(roles);
  console.table(JSON.parse(jsonString));
  decideAction();
}

async function updateEmployeeRole() {
  const employees = await database.viewAllEmployees();
  const jsonEmployeeString = JSON.stringify(employees);
  const jsonToObject = JSON.parse(jsonEmployeeString);
  const employeeChoices = [];
  jsonToObject.forEach(element => {
    const choice = {name: `${element.first_name} ${element.last_name}`, value: element.employee_id };
    employeeChoices.push(choice);
  });


  const role = await database.viewRoles();
  const jsonRoleObject = JSON.parse(JSON.stringify(role));
  const roleChoices = [];
  jsonRoleObject.forEach(element => {
    const choice = {name: element.title, value: element.id};
    roleChoices.push(choice);
  })


  inquirer.prompt([
    {
      type: "list",
      name: "updateEmployeeRole",
      message: "Which employee would you like to update?",
      choices: employeeChoices
    },
    {
      type: "list",
      name: "chooseRoleToUpdate",
      message: "What role would you like to update the selected employee to?",
      choices: roleChoices
      
    }
  ]).then (function(data) {
    console.log(data.updateEmployeeRole);
    console.log(data.chooseRoleToUpdate);
    database.updateEmployeeRole(data.updateEmployeeRole, data.chooseRoleToUpdate);
    seeEmployees();
    decideAction();
  });
}

function start() {
  //   createDepartment();
  //   seeDepartments();
  //   createRole();
  //   seeRole();
  //   seeEmployees();
  //   createEmployee();
  decideAction();
}
start();
