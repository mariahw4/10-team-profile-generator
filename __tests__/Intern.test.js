const Intern = require("../lib/Intern");

test('creates intern object', () => {
    const intern = new Intern('John', '4', 'john4@gmail.com', "UC Berkeley");

    expect(intern.name).toBe('John');
    expect(intern.id).toBe('4');
    expect(intern.email).toBe('john4@gmail.com');
    expect(intern.school).toBe("UC Berkeley")
    expect(intern.getRole(" ")).toBe("Intern");
});