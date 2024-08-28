import { Contractor } from "./Contractor";
import Employee from "./Employee";
import EmployeeManagement from "./EmployeeManagement";
import { FTE } from "./FTS";
import { ParttimeEmployee } from "./ParttimeEmployee";


// Controller
let employeeController: EmployeeManagement = new EmployeeManagement();

// Create data
let teo : Employee = new FTE();
let ti: Employee  = new Contractor();
let tun: Employee = new ParttimeEmployee();

// Using controller to process data
let totalSalary = employeeController.getTotalSalary([teo,ti,tun]);
console.log(`Total salary: ${totalSalary}`);
