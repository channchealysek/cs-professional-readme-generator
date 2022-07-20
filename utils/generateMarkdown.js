// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT License":
      licenseType = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
      break;
    case "GNU GPL v3":
      licenseType = "![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)";
      break;
    case "The Unlicense":
      licenseType = "![The Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)";
      break;
    default:
      licenseType = "";
  }
  return licenseType;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;
  if (license === 'MIT License') {
    licenseLink = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === 'GNU GPL v3') {
    licenseLink = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
  } else if (license === 'The Unlicense') {
    licenseLink = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
  } else {
    licenseLink = '';
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
   ${renderLicenseBadge(license)+"  "}
   ${"`"+renderLicenseLink(license)+"`"}
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `
  ## ${data.Title}
  ## License 
  ${renderLicenseSection(data.licenseType)}
  ## Description 
  ${data.Description}

  ## Table of Contents
  1. [Installation](#Installation)
  2. [Usage](#Usage)
  3. [License](#License)
  4. [Contributing](#Contributing)
  5. [Tests](#Tests)
  6. [Questions](#Questions)
  
  ## Installation
  ${'```'}
  ${data.Installation}
  ${'```'}

  ## Usage
  ${data.Usage}

  ## Contributing
  ${data.Contributing}

  ## Tests
  ${'```'}
  ${data.Tests}
  ${'```'}

  ## Questions
  If you have any questions please check my GitHub or contact me by e-mail bellow:  
  GitHub: https://github.com/ ${data.Questions}  
  E-Mail: ${data.Email}
  `;
}

module.exports = generateMarkdown;
