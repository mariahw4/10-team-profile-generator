const Engineer = require("../lib/Engineer");

test('creates engineer object', () => {
    const engineer = new Engineer('John', '4', 'john4@gmail.com', "john4");

    expect(engineer.name).toBe('John');
    expect(engineer.id).toBe('4');
    expect(engineer.email).toBe('john4@gmail.com');
    expect(engineer.github).toBe("john4")
    expect(engineer.getRole(" ")).toBe("Engineer");
});