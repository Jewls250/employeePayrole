DROP DATABASE IF EXISTS employee_payroll;
CREATE database employee_payroll;

USE employee_payroll;

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR (30),
  last_name VARCHAR (30),
  phone_number INT,
  age INT,
  id_number INT,
  email VARCHAR (30),
  PRIMARY KEY (id)
);

CREATE TABLE payroll (
  id INT NOT NULL AUTO_INCREMENT,
  position VARCHAR(30),
  wage DECIMAL,
  job_description VARCHAR (200),
  id_number INT,
  hours_worked DECIMAL,
  PRIMARY KEY (id)
);

SELECT * FROM employee;
select * from payroll;

