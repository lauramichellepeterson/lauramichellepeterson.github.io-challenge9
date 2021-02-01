// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage instructions.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license type.',
        choices: ['Apache License 2.0', 'MIT License', 'GNU GPLv3', 'ISC License']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'List the collaborators for this project.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Describe the tests.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github user name?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    }
];

const promptUser = () => {
    return inquirer.prompt(questions);
};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw err;
      
        console.log('README.md complete! Check out ./dist/README.md to see the output!');
    });
}

// TODO: Create a function to initialize app
function init() {
    promptUser()
        .then(answers => {
            return generateMarkdown(answers)
        })
        .then(pageMD => {
            writeToFile('./dist/README.md',pageMD)
        });
};

// Function call to initialize app
init();