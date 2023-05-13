// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "MIT"){
    return "![Badge](https://img.shields.io/badge/license-MIT-blue)"
  } else if (license == "APACHE") {
    return "![Badge](https://img.shields.io/badge/license-Apache%202.0-brightgreen)"
  } else if (license == "gnu") {
    return "![Badge](https://img.shields.io/badge/license-gnu%203.0-red)"
  } else {
    return ""
  }
}

// returns the license link
// If there is no license, returns an empty string
function renderLicenseLink(license) {
  if (license == "MIT"){
    return "https://opensource.org/license/mit/"
  } else if (license == "APACHE") {
    return "https://www.apache.org/licenses/LICENSE-2.0"
  } else if (license == "GNU") {
    return "https://www.gnu.org/licenses/gpl-3.0.en.html"
  } else {
    return ""
  }
}

// returns license section of README
// If there is no license, returns an empty string
function renderLicenseSection(license) {
  if (license == "MIT"){
    return "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: \nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."
  } else if (license == "APACHE") {
    return "Licensed under the Apache License, Version 2.0 (the \"License\");\nyou may not use this file except in compliance with the License. \nYou may obtain a copy of the License at \n http://www.apache.org/licenses/LICENSE-2.0 \nUnless required by applicable law or agreed to in writing, software \ndistributed under the License is distributed on an \"AS IS\" BASIS, \nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. \nSee the License for the specific language governing permissions and \nlimitations under the License."
  } else if (license == "GNU") {
    return " This program is free software: you can redistribute it and/or modify \nit under the terms of the GNU General Public License as published by\nthe Free Software Foundation, either version 3 of the License, or\n(at your option) any later version.\nThis program is distributed in the hope that it will be useful,\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\nGNU General Public License for more details.\nYou should have received a copy of the GNU General Public License\nalong with this program.  If not, see <https://www.gnu.org/licenses/>."
  } else {
    return ""
  }
}

// generates markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  
  ## Description

  ${data.description}

  ## Table of Contents 

  [Description](#description)

  [Installation](#installation)

  [Usage](#usage)

  [Credits](#credits)

  [License](#license)

  [Test](#test)

  [Questions](#questions)

  ## Installation
  
  ${data.installation}

  ## Usage

  ${data.usage}
  
  ## Credits
  
  ${data.contribution}
  
  ## License
 
  ${renderLicenseBadge(data.license.toUpperCase())}

  ${renderLicenseLink(data.license.toUpperCase())}

  ${renderLicenseSection(data.license.toUpperCase())}
 
  ## Test
  
  ${data.test}

  ## Questions

  ${data.github}

  ${"https://github.com/" + data.github}

  ${data.email}

  ${data.questions}

`;
}

// brings function over to index.js
module.exports = generateMarkdown;
