const inquirer = require("inquirer");
const Shapes = require("./lib/shapes.js");
// const fs = require("fs/promises");
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
    // console.log(answers)
    // render({shape, text, color, textColor})
    const logoData = logoInput(answers);
    console.log(logoData)
    
    const logoShape = new Shapes(
      logoData.shape,
      logoData.color,
      logoData.textColor,
      logoData.text
    );
    const logo = logoShape.render();
    
    return writeFile("./examples/logo.svg", logo);
  })
  .then(() => {
    return
    console.log("Successfully created logo.svg")
  })
};
//  => {
//   logoInput()
//   .then((answers) => {


//   })
  
// }


//   .then((answers) => {
//     console.log(answers);
//     fs.writeFile("logo.svg", logoInput(answers), (err) =>
//       err ? console.log(err) : console.log("Logo successfully created!")
//     );
// });

// const createLogo = () => {
//   logoInput().then((answers) => {
//     console.log(answers);
//     fs.writeFile("logo.svg", logo(answers), (err) =>
//       err ? console.log(err) : console.log("Logo successfully created!")
//     );
//   });
// };

logoInput()