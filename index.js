//NPM packages
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

//Import classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//Output 
const DIST_DIR = path.resolve(__dirname, 'dist');
const outputPath = path.join(DIST_DIR, 'teamProfile.html');

//Import HTML template
const templateHTML = require('./src/templateHTML');

//Empty array for team members
const teamMembers = [];

//Functions for adding to team

function addTeamMember() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'pick_team_member',
                message: 'Add engineer, intern, or finish assembling team?',
                choices: ['Engineer', 'Intern', 'Assemble Team!'],
            }
        ])
        .then((val) => {
            if (val.pick_team_member === 'Engineer') {
                addEngineer();
            } else if (val.pick_team_member === 'Intern') {
                addIntern();
            } else {
                createTeamFile();
            }
        });
}


function addManager() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the team manager?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the ID of the team manager?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the email of the team manager?',
            },
            {
                type: 'input',
                name: 'imgSrc',
                message: 'Enter directory of picture for the team manager',
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the office number of the team manager?'
            },
        ])
        .then((val) => {
            const manager = new Manager(val.name, val.id, val.imgSrc, val.officeNumber);
            console.table(manager);
            teamMembers.push(manager);
            addTeamMember();
        });
}



function addEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: `What is the engineer's name?`,
            },
            {
                type: 'input',
                name: 'id',
                message: `What is the engineer's ID?`,
            },
            {
                type: 'input',
                name: 'email',
                message: `What is the engineer's email?`,
            },
            {
                type: 'input',
                name: 'imgSrc',
                message: 'Enter directory of picture for the engineer',
            },
            {
                type: 'input',
                name: 'gitHub',
                message: `What is the engineer's GitHub username?`,
            },
        ])
        .then((val) => {
            const engineer = new Engineer(val.name, val.id, val.email, val.imgSrc, val.gitHub);
            console.table(engineer);
            addTeamMember();
        });
}



function addIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: `What is the intern's name?`,
            },
            {
                type: 'input',
                name: 'id',
                message: `What is the intern's ID?`,
            },
            {
                type: 'input',
                name: 'email',
                message: `What is the intern's email?`,
            },
            {
                type: 'input',
                name: 'imgSrc',
                message: 'Enter directory of picture for the intern',
            },
            {
                type: 'input',
                name: 'school',
                message: `What school did the intern go to?`,
            },
        ])
        .then((val) => {
            const intern = new Intern(val.name, val.id, val.email, val.imgSrc, val.school);
            console.table(intern);
            teamMembers.push(intern);
            addTeamMember();
        });
}

//Create HTML file
function createTeamFile() {
    if (!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR);
    } else {
        fs.writeFileSync(outputPath, templateHTML(teamMembers), 'utf-8');
        console.log('HTML file created in dist folder!');
    }
}

function startApp() {
    addManager();
}

startApp();
