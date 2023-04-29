const inquirer = require("inquirer");
const { Shapes, Circle, Square, Triangle } = require("./lib/shapes.js");
const { writeFile } = require("fs/promises");

const logoInput = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "shape",
      message: "What shape would you like to use",
      choices: ["circle", "square", "triangle"],
    },
    {
      type: "input",
      name: "color",
      message: "What color would you like your shape to be",
    },
    {
      type: "input",
      name: "textColor",
      message: "What color would you like your text to be",
    },
    {
      type: "input",
      name: "text",
      message: "Please enter text for the logo. Up to 3 characters",
      validate: characters => {
        if (characters.length <= 3) {
          return true;
        }
        else {
          console.log("Must be 3 characters or less")
          return false;
        }
      }
    },
  ])
  .then((answers) => {
    console.log(answers)

   if(answers.shape === "circle") {
    const circleLogo = new Circle(answers.color, answers.textColor, answers.text);

    createCircle(answers)
   };

   if(answers.shape === "square") {
    const squareLogo = new Square(answers.color, answers.textColor, answers.text);

    createSquare(answers)
   };

   if(answers.shape === "triangle") {
    const triangleLogo = new Triangle(answers.color, answers.textColor, answers.text);

    createTriangle(answers)
   }
   console.log("Successfully created logo.svg")
    
  })
};

const createCircle = (data) => {
  const newCircleObj = new Circle(data.color, data.textColor, data.text);
  const circleSVG = newCircleObj.render();
  writeFile("./examples/logo.svg", circleSVG);
};

const createSquare = (data) => {
  const newSquareObj = new Square(data.color, data.textColor, data.text);
  const squareSVG = newSquareObj.render();
  writeFile("./examples/logo.svg", squareSVG);
};

const createTriangle = (data) => {
  const newTriangleObj = new Triangle(data.color, data.textColor, data.text);
  const triangleSVG = newTriangleObj.render();
  writeFile("./examples/logo.svg", triangleSVG);
};



logoInput()