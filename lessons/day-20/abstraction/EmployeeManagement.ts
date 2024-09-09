import Employee from "./Employee";

export default class EmployeeManagement {

    // Casting (ep kieu)

    // Emphrise IS-A relationship processing
    getTotalSalary(employeeList: Employee[]) {
        let totalSalary: number = 0;
        employeeList.forEach(emp => {
            totalSalary += totalSalary + emp.getSalary() + emp.getSupportSalary();
        });

        return totalSalary;

    }
}
/**
 * Admin: Settings + Admin only option
 * normal user: Settings
 */