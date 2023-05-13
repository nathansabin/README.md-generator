// Includes packages needed for this application along with function from "generateMarkdown.js"
const inquierer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// Created an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Project Title: "
    },
    {
        type: "input",
        name: "description",
        message: "Description of project: "
    },
    {
        type: "input",
        name: "installation",
        message: "How can we install your software: "
    },
    {
        type: "input",
        name: "usage",
        message: "How can we use your software: "
    },
    {
        type: "input",
        name: "license",
        message: "License used if any: "
    },
    {
        type: "input",
        name: "contribution",
        message: "How did you contribute: "
    },
    {
        type: "input",
        name: "test",
        message: "Test you ran: "
    },
    {
        type: "input",
        name: "github",
        message: "Github account name: "
    },
    {
        type: "input",
        name: "email",
        message: "Your email: "
    },
    {
        type: "input",
        name: "questions",
        message: "Other ways people can reach you: "
    }
];

// Created a function to write README file
function writeToFile(data) {
    fs.writeFile("README.md", data, (err) => {
        err ? console.log(err) : console.log("success")
    })
}

// Created a function to initialize app
function init() {
    inquierer.prompt(questions).then(function(answers){
        const markdownText = generateMarkdown(answers);
        writeToFile(markdownText)
    })
}

// Function call to initialize app
init();

// fix badge layout

