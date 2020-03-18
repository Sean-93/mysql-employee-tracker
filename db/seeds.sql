USE employee-tracker_db;

INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("Engineering");
INSERT INTO department (name)
VALUES ("Finance");
INSERT INTO department (name)
VALUES ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 250000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 120000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 125000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Legal Team Lead", 200000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jim", "Brown", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mary", "Johnson", 1, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Samantha", "James", 3, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jeff", "White", 5, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bert", "Long", 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tina", "Heff", 1, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jane", "Crump", 2, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Hellen", "Fink", 4, 7);