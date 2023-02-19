const Employee = require("./Employee");

class Intern extends Employee {
    constructor(school){
        super(data.employeeName, data.employeeId, data.employeeEmail);
        this.school = school;
    }
getSchool(value) {
    this.school = value
    return `${value}`
}
}

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

module.exports = Intern;