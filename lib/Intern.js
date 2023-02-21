const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
getSchool() {
    return `${this.school}`
}

getRole() {
    return "Intern";
}
}

module.exports = Intern;
// if (data.employeeRole === "Engineer") {
//     const internQuestions = [
//         {
//             type: "input",
//             message: "What school do you attend?",
//             name: "employeeSchool",
//         },
//     ]

// function getSchool(value) {
//     return `${value}`
// }


// inquirer.prompt(internQuestions).then((data) => {
//     console.log(JSON.stringify(data, null, " "));
//     data.getSchool = getSchool(data.employeeSchool);
//     data.getRole = getRole(data.employeeRole);
// })
// } else {
//     return
// }
// // getSchool();
// getRole();

