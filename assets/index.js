// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
// TODO: Create an array of questions for user input
const questions = [ {
    type: "input",
    message: "Enter Github username:",
    name: "username"
},
{
    type: "input",
    message: "Enter project title:",
    name: "title"
},
{
    type: "input",
    message: "Enter project description:",
    name: "description"
},
{
    type: "checkbox",
    message: "Enter contents:",
    name: "table",
    choices: ['Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions']
},
{
    type: "input",
    message: "Enter step by step of installation:",
    name: "installation"
},
{
    type: "input",
    message: "Enter usage:",
    name: "usage"
},
{
    type: "list",
    message: "Enter license:",
    name: "license",
    choices: [
        'MIT',
        'GNU',
        'Apache'
    ]
},
{
    type: "input",
    message: "Enter contributors: (enter github usernames and separate them with commas)",
    name: "contributing"
},
{
    type: "input",
    message: "Enter details of the testing procedures",
    name: "tests"
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    questions()
}

// Function call to initialize app
init();

