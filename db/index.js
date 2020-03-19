const connection = require("./connection");

class Database {
    constructor(connection) {
        this.connection = connection;
    }
    addEmployees(employee){
        return this.connection.query("INSERT INTO employee SET ?", employee)
    }
    addDepartments(department){
        return this.connection.query("INSERT INTO department SET ?", department)
    }
    addRoles(role){
        return this.connection.query("INSERT INTO role SET ?", role)
    }
    viewAllEmployees(){
        return this.connection.query("SELECT employee.id AS employee_id, first_name, last_name, department.id AS department_id, department.name AS department_name, role.title AS role_title FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id GROUP BY employee.id, department.name")
    }
    viewDepartments(){
        return this.connection.query("SELECT * FROM department")
    }
    viewRoles(){
        return this.connection.query("SELECT role.id, role.title, department.name as department_name FROM role LEFT JOIN department ON role.department_id = department.id")
    }
    updateEmployeeRole(employeeId, roleId){
        return this.connection.query("UPDATE employee SET role_id = ? WHERE id = ?", [roleId, employeeId])
    }
}

module.exports = new Database(connection);
