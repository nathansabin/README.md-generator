// TODO: Include packages needed for this application
const inquierer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// Created an array of questions for user input
// TODO Go back and adjust types as needed
const questions = [
    {
        type: "input",
        name: "location",
        message: "File path"
    },
    {
        type: "input",
        name: "title",
        message: "title"
    },
    {
        type: "input",
        name: "description",
        message: "description"
    },
    {
        type: "input",
        name: "tableOfContents",
        message: "table of contents"
    },
    {
        type: "input",
        name: "installation",
        message: "installation"
    },
    {
        type: "input",
        name: "usage",
        message: "usage"
    },
    {
        type: "input",
        name: "license",
        message: "license"
    },
    {
        type: "input",
        name: "contribution",
        message: "contribution"
    },
    {
        type: "input",
        name: "test",
        message: "test"
    },
    {
        type: "input",
        name: "questions",
        message: "questions"
    }
];

// Created a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log("success")
    })
}

// Created a function to initialize app
function init() {
    inquierer.prompt(questions).then(function(answers){
        const markdownText = generateMarkdown(answers)
        writeToFile(answers.location, answers)
    })
}

// Function call to initialize app
init();
