// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github);

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./dist/README.md', pageHTML, err => {
        if (err) throw err;
      
        console.log('README.md complete! Check out /dist/README.md to see the output!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
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
                choices: ['first', 'second', 'third']
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
                name: 'gitHub',
                message: 'What is your Git Hub user name?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email?'
            }
        ])
        .then(answers => console.log(answers));
};

// Function call to initialize app
init();