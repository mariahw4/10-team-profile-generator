const Manager = require("../lib/Manager");

test('creates manager object', () => {
    const manager = new Manager('John', '4', 'john4@gmail.com', "15");

    expect(manager.name).toBe('John');
    expect(manager.id).toBe('4');
    expect(manager.email).toBe('john4@gmail.com');
    expect(manager.officeNumber).toBe("15");
    expect(manager.getRole(" ")).toBe("Manager");
});