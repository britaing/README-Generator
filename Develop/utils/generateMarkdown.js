const mitBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
const gnuBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
const iscBadge = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
const odblBadge = `[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)`;
const apacheBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;




// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge({license}) {
  if(value === 'MIT'){
    return mitBadge;
  } else if (value === 'GNU GPL v3'){
    return gnuBadge;
  } else if (value === 'ISC') {
    return iscBadge;
  } else if (value === 'ODbL') {
    return odblBadge;
  } else if (value === 'Apache') {
    return apacheBadge;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

function generateMarkdown({title, description, installation, usage, credits, contribute, test, license, github, email}) {
  return `
  # ${title} 
  ## Description:
  ${description}
 
  ### Table of Contents:
  
  * [Installation Instructions](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Contribute](#contribute)
  * [Test](#test)
  * [License](#license)
  * [Contact](#contact)
  
  ## Installation Instructions: 
  ${installation}
  ## Usage:
  ${usage}
  ## Credits:
  ${credits}
  ## Ways to Contribute:
  ${contribute}
  ## Test:
  ${test}
  ## License:
  The License for this project is: ${license}
  Please go to [https://choosealicense.com/](https://choosealicense.com/) for more information regarding
  licenses.
  ## Contact:
  * GitHub: ${github}
  * Email:  ${email}
`;
}

module.exports = generateMarkdown;
