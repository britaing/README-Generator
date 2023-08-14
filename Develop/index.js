const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const questions = () => inquirer.prompt([
    {
        name: 'Title',
        type: 'input',
        message: 'what is the title of your project?'
    },
    {
        name: 'Description',
        type: 'input',
        message: 'What is the description of your project?'
    },

    {
        name: 'Installation',
        type: 'input',
        message: 'What are the installation instructions for your project?'
    },
    {
        name: 'Usuage',
        type: 'input',
        message: "What are the usage guidelines for your project?"
    },
    {
        name: 'Credits',
        type: 'input',
        message: "Who are the contributing programmers to your project?"
    },
    {
        name: 'Contribute',
        type: 'input',
        message: "How can other coders contribute to this project?"
    },
    {
        name: 'Tests',
        type: 'input',
        message: 'Do you have examples of how to run tests with your program?'
    }
]);

// TODO: Create a function to write README file
questions().then((answers) => {
    const generated = generateMarkdown(answers);
    fs.writeFileSync('README.md', generated)
    }).then(() => console.log('Your README file has been written!'))

// TODO: Create a function to initialize app
function init() {

}
// Function call to initialize app
init();




