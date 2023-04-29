const { Shapes, Circle, Square, Triangle } = require("../lib/shapes.js")

describe("Shapes", () => {

    describe("Triangle Logo", () => {
        it("should return the triangle shape color blue", () => {
            const shape = new Triangle("blue", "white", "test");
            shape.setColor("blue");

            expect(shape.color).toEqual("blue");
        })

    })

    describe("Circle Logo", () => {
        it("should return the circle shape color green", () => {
            const shape = new Circle("green", "white", "test");
            shape.setColor("green");

            expect(shape.color).toEqual("green");
        })

    })

    describe("Square Logo", () => {
        it("should return the square shape color red", () => {
            const shape = new Triangle("red", "white", "test");
            shape.setColor("red");

            expect(shape.color).toEqual("red");
        })

    })

    // describe("Circle Logo", () => {
    //     test("should return the circle shape color blue", () => {
    //         // have some type of setup (we need an Object or data  to test)
    //         const shape = new Circle("blue", "green", "test");
    //         //shape.setColor("blue");

    //         //expect(shape).ToBeInTheDocument();
    //         expect(shape.color).toEqual("blue");

    //        /* expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        
    //         <circle cx="150" cy="100" r="80" fill="blue" />
           
    //         <text x="150" y="125" font-size="60" text-anchor="middle" fill="green">test</text>
          
    //         </svg>`);
    //         */
    //     })

    // })
})