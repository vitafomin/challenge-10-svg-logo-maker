const inquirer = require("inquirer")

const logoInput = () => {
    return inquirer
    .prompt([
        {
            type: "input",
            name: "text",
            message: "Please enter text for the logo. Up to 3 characters" 
        },
        {
            type: "list",
            name: "shape",
            message: "What shape would you like to use",
            choices: ["circle", "square", "triangle"]
        },
        {
            type: "input",
            name: "color",
            message: "What color would you like your shape to be"
        }
    ])
}