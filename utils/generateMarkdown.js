// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license == 'Apache License 2.0') {
        return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
        `;
    } else if (license == 'MIT License') {
        return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
        `;
    } else if (license == 'GNU GPLv3') {
        return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)
        `;
    } else if (license == 'ISC License') {
        return `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)
        `;
    } else {
        return '';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// Alternative links:
// (https://opensource.org/licenses/Apache-2.0)
// (https://opensource.org/licenses/MIT)
// (https://www.gnu.org/licenses/gpl-3.0)
// (https://opensource.org/licenses/ISC)
function renderLicenseLink(license) {
    if (license == 'Apache License 2.0') {
        return `https://choosealicense.com/licenses/apache-2.0/
        `;
    } else if (license == 'MIT License') {
        return `https://choosealicense.com/licenses/mit/
        `;
    } else if (license == 'GNU GPLv3') {
        return `https://choosealicense.com/licenses/gpl-3.0/
        `;
    } else if (license == 'ISC License') {
        return `https://choosealicense.com/licenses/isc
        `;
    } else {
        return '';
    }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license == 'Apache License 2.0') {
        return `Apache License 2.0
        `;
    } else if (license == 'MIT License') {
        return `MIT License
        `;
    } else if (license == 'GNU GPLv3') {
        return `GNU GPLv3
        `;
    } else if (license == 'ISC License') {
        return `ISC License
        `;
    } else {
        return '';
    }
}

// TODO: Create a function to generate markdown for README
module.exports = data => {
    // const answers = data;

    // console.log(answers.projectTitle);
    return `# ${data.projectTitle}

## Description 
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Questions](#questions)

## Installation
${data.installation}

## Usage 
${data.usage}

## License
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}
${renderLicenseBadge(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
https://github.com/${data.github}
${data.email}

`;
}

// module.exports = generateMarkdown;
