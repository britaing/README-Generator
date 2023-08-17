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
        when: ({ install }) => {
            if (install) {
                return true;
            }
        }
    },
    {
        name: 'areUsage',
        type: 'confirm',
        message: 'Are there any usage guidelines?'
    },
    {
        name: 'usage',
        type: 'input',
        message: 'What are the usage guidelines?',
        when: ({ areUsage }) => {
            if (areUsage) {
                return true;
            }
        }
    },
    {
        name: 'canContribute',
        type: 'confirm',
        message: 'Can other developers contribute to this project?'
    },
    {
        name: 'contribute',
        type: 'input',
        message: 'What are the guidelines to contribute?',
        when: ({ canContribute }) => {
            if (canContribute) {
                return true;
            }
        }
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
        when: ({ testsEx }) => {
            if (testsEx) {
                return true;
            }
        }
    },
    {
        name: 'creditsCon',
        type: 'confirm',
        message: 'Do you need to credit anyone on this project?'
    },
    {
        name: 'credits',
        type: 'input',
        message: 'Who needs to be credited?',
        when: ({ creditsCon }) => {
            if (creditsCon) {
                return true;
            }
        }
    },
    {
        name: 'isLicense',
        type: 'confirm',
        message: 'Is there a license associated with this program?'
    },
    {
        name: 'license',
        type: 'list',
        choices: ['MIT', 'GNU GPL v3', 'ISC', 'ODbL', 'Apache'],
        when: ({ isLicense }) => {
            if (isLicense) {
                return true;
            } else {
                return '';
            }
        }
    },
    {
        name: 'github',
        type: 'input',
        message: 'What is your GitHub username?'
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is your email address?'
    }
]);

questions().then((answers) => {
    const generated = generateMarkdown(answers);
    fs.writeFileSync('./generated/README.md', generated)
}).then(() => console.log('Huzzah! Your README file has been written!'));

function init() { }
init();




