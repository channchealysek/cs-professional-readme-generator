const { rejects } = require('assert');
const fs = require('fs');
const inquirer = require('inquirer');
const { resolve } = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

const getPrompUser =  promptUser => {
    return inquirer.prompt([
        {
            name: "Title",
            message: "What is the title of your project?",
            type:"input",
        },
        {
            type:"input",
            name: "Description",
            message: "Please write a short description of your project",
            
        },
        {
            type:"input",
            name: "Installation",
            message: "What instructions should users follow to install your application?",
            
        },
        {
            type:"input",
            name: "Usage",
            message: "How to use this applicaiton?",
        },
        {
        type:"input",
        name: "Contributing",
        message: "How can users contribute to this project?",
        },
        {
            type:"input",
            name: "Tests",
            message: "What command should be use to run tests?",
        },

        {
            type: "list",
            name: "licenseType",
            message: "Chose the appropiate license for this project",
            choices: [
                "MIT License",
                "GNU GPL v3",
                "The Unlicense"
            ]
        },
        {
            type:"input",
            name: "Questions",
            message: "Enter your github username.",
        },
        {
            type: 'input',
            name: 'Email',
            message: 'Enter your Email address',
        }

    ]);

};

const writeToFile = fileContents => {
    return new Promise((resolve, rejects) =>{
        fs.writeFile('README.md', fileContents, err => {
            if(err){
                reject(err);
                return;
            }

            resolve({
                ok:true,
                message:'Successfully wrote to README.md!'
            })
        })
    })
};

getPrompUser()
    .then(promptUser => {
        return generateMarkdown(promptUser);
    })
    .then(_getAnswers => {
        writeToFile(_getAnswers);
        console.log('Successfully wrote to README.md!');
    }).catch((err) => console.error(err));