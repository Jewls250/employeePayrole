DROP DATABASE IF EXISTS employee_payroll;
CREATE database employee_payroll;

USE employee_payroll;

CREATE TABLE employee (
  first_name VARCHAR (30),
  last_name VARCHAR (30),
  phone_number INT,
  age INT,
  id_number INT,
  email VARCHAR (30),
  PRIMARY KEY (position)
);

CREATE TABLE payroll (
  position VARCHAR(30) ,
  wage DECIMAL,
  job_description VARCHAR (200),
  id_number INT,
  hours_worked DECIMAL,
  PRIMARY KEY  (position)
);

SELECT * FROM employee;
select * from payroll;

