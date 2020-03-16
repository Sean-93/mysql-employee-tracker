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
    viewAllEmployeesByDepartment(){
        return this.connection.query("SELECT department.id, department.name FROM employee LEFT JOIN role ON emloyee.role_id = role.id LEFT JOIN department ON role.department_id = department.id")
    }
    // viewDepartments(){
    //     return this.
    // }
    // viewRoles(){
    //     return this.
    // }
    // updateEmployeeRoles(){
    //     return this.
    // }
}
