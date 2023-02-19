const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(github){
        super(data.employeeName, data.employeeId, data.employeeEmail);
        this.github = github;
    }
getGithub(value) {
    this.github = value
    return `${value}`
    }
getrole(value) {
    this.role = value
}
}

// if (data.employeeRole === "Engineer") {
//     const engineerQuestions = [
//         {
//             type: "input",
//             message: "What is your github username?",
//             name: "employeeGithub",
//         },
//     ]


// // function getGithub(value) {
// //     return `${value}`
// // }

// inquirer.prompt(engineerQuestions).then((data) => {
//     console.log(JSON.stringify(data, null, " "));
//     data.getGithub = getGithub(data.employeeGithub);
//     data.getRole = getRole(data.employeeRole);
// })
// } else {
//     return
// }
// // getGithub();
// getRole();
module.exports = Engineer;