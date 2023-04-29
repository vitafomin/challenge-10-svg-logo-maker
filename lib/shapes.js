// This is the class shape
class Shapes {
    constructor(color, textColor, text) {
        
        this.color = color
        this.textColor = textColor
        this.text = text
    }
}

// This is the circle shape logo, and it was extended fron the shapes class
class Circle extends Shapes {
    constructor(color, textColor, text) {
        super(color, textColor, text)
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return  `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        
        <circle cx="150" cy="100" r="80" fill="${this.color}" />
       
        <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>`
    }
}

// This is the square shape logo, and it was extended fron the shapes class
class Square extends Shapes {
    constructor(shape, text, color, textColor) {
        super(shape, text, color, textColor)
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        
        <rect x="65" y="25" width="170" height="170" fill="${this.color}" />
       
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>`
    }
}

// This is the triangle shape logo, and it was extended fron the shapes class
class Triangle extends Shapes {
    constructor(shape, text, color, textColor){
        super(shape, text, color, textColor)
    }

    setColor(color) {
        this.color = color;
    }
    
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        
        <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />

        <text x="150" y="135" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

        </svg>`
    }
}



            
// Exporting the Shapes, Circle, Square, and Triangle objects
module.exports = { Shapes, Circle, Square, Triangle };
