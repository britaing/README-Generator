// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
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
        name : 'Contribute' ,
        type : 'input',
        message : "How can other coders contribute to this project?"
    },

    {
        name: 'Tests',
        type: 'input',
        message: 'Do you have examples of how to run tests with your program?'
    }

]);

questions().then(answers => console.log(answers));

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { 
    
}

// Function call to initialize app
init();




// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README