const mitBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
const gnuBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
const iscBadge = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
const odblBadge = `[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)`;
const apacheBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;

function renderLicenseBadge({ license }) {
  if (license === 'MIT') {
    return mitBadge;
  } else if (license === 'GNU GPL v3') {
    return gnuBadge;
  } else if (license === 'ISC') {
    return iscBadge;
  } else if (license === 'ODbL') {
    return odblBadge;
  } else if (license === 'Apache') {
    return apacheBadge;
  } else {
    return ' ';
  }
}

function generateMarkdown({ title, description, installation, usage, credits, contribute, test, license, github, email }) {
  return `
  # ${title} 
  ## Badges
  ${renderLicenseBadge({ license })}
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
  * The License for this project is: ${license}
  * Please go to [https://choosealicense.com/](https://choosealicense.com/) for more information regarding
  licenses.
  ## Contact:
  * GitHub: ${github}
  * Email:  ${email}
`;
}
module.exports = generateMarkdown;
