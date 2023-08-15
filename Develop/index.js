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
        name: 'install',
        type: 'confirm',
        message: 'Are there any special installation instructions?'
    },
    {   
        name: 'installation',
        type: 'input',
        message: 'What are the special installation instructions?',
        when: ({install}) => {
            if(install){
                return true;
            }
        }
    },
    {
        name: 'usage',
        type: 'input',
        message: "What are the usage guidelines for your project?"
    },
       
    {
        name: 'contributeCon',
        type: 'confirm',
        message: 'Are there any guidelines if anyone would like to contribute to this project?'
    },
    {
        name: 'contribute',
        type: 'input',
        message: 'What are the guidelines to contribute?'
    },
    {
        name: 'testsEx',
        type: 'confirm',
        message: 'Do you have examples of how to run tests with your program?'
    },
    {
        name: 'tests',
        type: 'input',
        message: 'What are examples of how to run tests with your program?',
        when: ({testsEx}) => {
            if(testsEx) {
                return true;
            }
        }
    }
]);

questions().then((answers) => {
    const generated = generateMarkdown(answers);
    fs.writeFileSync('README.md', generated)
    }).then(() => console.log('Your README file has been written!'))

function init() {}
init();




