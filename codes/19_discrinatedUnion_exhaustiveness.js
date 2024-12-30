"use strict";
function getTrueShape(shape) {
    if (shape.kind === "circle")
        return Math.PI * shape.radius ** 2;
    return shape.side * shape.side;
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        // case "rectangle":
        //   return shape.lenth * shape.width;
        default:
            const _defaultforshape = shape;
            return _defaultforshape;
    }
}
