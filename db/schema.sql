DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE employee_tracker_db;
USE employee_tracker_db;


CREATE TABLE department (
    id int AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL 
);
CREATE TABLE role (
    id int AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    department_id int NOT NULL,
    INDEX department_id(department_id),
    CONSTRAINT FK_department FOREIGN KEY(department_id) REFERENCES department(id) ON DELETE CASCADE
);
CREATE TABLE employee (
    id int AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id int NOT NULL,
    INDEX role_id(role_id),
    CONSTRAINT FK_role FOREIGN KEY(role_id) REFERENCES role(id) ON DELETE CASCADE,
    manager_id int NULL,
    INDEX manager_id(manager_id),
    CONSTRAINT FK_manager FOREIGN KEY(manager_id) REFERENCES employee(id) ON DELETE SET NULL
)