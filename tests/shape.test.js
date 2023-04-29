const { Shapes, Circle, Square, Triangle } = require("../lib/shapes.js")

// The the tests for the shapes
describe("Shapes", () => {
    // The test for the triangle shape logo color "blue"
    describe("Triangle Logo", () => {
        it("should return the triangle shape color blue", () => {
            const shape = new Triangle("blue", "white", "test");
            shape.setColor("blue");

            expect(shape.color).toEqual("blue");
        })

    })
    // The test for the circle shape logo color "green"
    describe("Circle Logo", () => {
        it("should return the circle shape color green", () => {
            const shape = new Circle("green", "white", "test");
            shape.setColor("green");

            expect(shape.color).toEqual("green");
        })

    })
    // The test for the square shape logo color "red"
    describe("Square Logo", () => {
        it("should return the square shape color red", () => {
            const shape = new Square("red", "white", "test");
            shape.setColor("red");

            expect(shape.color).toEqual("red");
        })

    })
})