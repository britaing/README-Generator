const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const questions = () => inquirer.prompt([
    {
        name: 'title',
        type: 'input',
        message: 'what is the title of your project?'
    },
    {
        name: 'description',
        type: 'input',
        message: 'What is the description of your project?'
    },
    {
        name: 'installation',
        type: 'input',
        message: 'What are the installation instructions for your project?'
    },
    {
        name: 'usage',
        type: 'input',
        message: "What are the usage guidelines for your project?"
    },
    {
        name: 'credits',
        type: 'input',
        message: "Who are the contributing programmers to your project?"
    },
    {
        name: 'contribute',
        type: 'input',
        message: "How can other coders contribute to this project?"
    },
    {
        name: 'tests',
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




