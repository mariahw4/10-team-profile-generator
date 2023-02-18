const inquirer = require("inquirer");
const jest = require("jest");

const generateHTML = require("./src/generateHTML");
const generateCSS = require("./src/generateCSS");


inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
        type: "list",
        message: "What is your role?",
        name: "role",
        choices: ["Employee", "Engineer", "Manager", "Intern"],
    },
    {
      type: 'input',
      message: 'What is your id?',
      name: 'id',
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email',
    },
    {
        type: "input",
        message: "What is your office number?",
        name: "officeNumber",
    },
    {
        type: "input",
        message: "What is your github username?",
        name: "github",
    },
    {
        type: "input",
        message: "What school do you attend?",
        name: "school",
    },
  ])

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateHTML(data), function (err) {
        if (err) {
            return console.log(err);
        }
    });
  }
  function writeToStyle(fileName, data) {
    fs.writeFile(fileName, generateCSS(data), function (err) {
        if (err) {
            return console.log(err);
        }
    });
  }

  function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(JSON.stringify(data, null, " "));
        // data.getLicense = getLicense(data.license);
        // data.licenseSelection = licenseSelection(data.license);
        // data.githubLink = githubLink(data.userName);
        // data.emailTo = emailTo(data.userEmail);
        writeToFile("./dist/index.html", data);
        writeToStyle("./dist/style.css", data);
    });
  }
  
  // // Function call to initialize app
  init();