# 10-team-profile-generator
created by Mariah Wear for Berkely Coding Bootcamp EdX
Due 2/23/23

My task was to build a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. 

This challenge requires use of the Inquirer and Jest packages to capture prompt answers and run tests. 

## Usage
Screenshot and Video walk through

[Walkthough Video](https://drive.google.com/file/d/1oxVNzjxFWhcJ-feafRDttBPyptEXBQD3/view)

Screenshot:
![Screenshot](./src/images/screenshot.png)

## User Story (from source)

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria (from source)

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Installation

This application uses [Jest](https://www.npmjs.com/package/jest) for running the unit tests and [Inquirer](https://www.npmjs.com/package/inquirer/v/8.2.4) for collecting input from the user.

 The application will be invoked by using the following command:

```bash
node index.js
```

## Contact

https://github.com/mariahw4/10-team-profile-generator
