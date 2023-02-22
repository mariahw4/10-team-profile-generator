

const Employee = require("../lib/Employee.js");

test('creates employee object', () => {
    const employee = new Employee('John', '4', 'john4@gmail.com');

    expect(employee.name).toBe('John');
    expect(employee.id).toBe('4');
    expect(employee.email).toBe('john4@gmail.com');
    expect(employee.getRole(" ")).toBe("Employee");
});
