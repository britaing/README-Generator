// const renderLicenseBadge = require('./utils/licenseRender');

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
