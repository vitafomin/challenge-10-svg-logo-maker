class Shapes {
    constructor(shape, color, textColor, text) {
        // if (text.length > 3) {
        //     throw new Error("`text` must be 3 characters or less.")
        // }
        this.shape = shape
        this.color = color
        this.textColor = textColor
        this.text = text
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <${this.shape} cx="150" cy="100" r="80" fill="${this.color}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>`
    }

}

// render() {
//     fs.writeFile("logo.svg", `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

//     <${this.shape} cx="150" cy="100" r="80" fill="${this.color}" />
  
//     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  
//   </svg>`, (err) => err ? console.log(err) : console.log("Logo successfully created!"))
// }

// class Circle extends Shapes {
    //     constructor(shape, text, color, textColor)
    //     super(shape, text, color, textColor)
    // }
    // class Square extends Shapes {
        //     constructor(shape, text, color, textColor)
        //     super(shape, text, color, textColor)
        // }
        // class Triangle extends Shapes {
            //     constructor(shape, text, color, textColor)
            //     super(shape, text, color, textColor)
            // }
            
// const circle = new Shapes
//     "circle",
//     ""
            

module.exports = Shapes;