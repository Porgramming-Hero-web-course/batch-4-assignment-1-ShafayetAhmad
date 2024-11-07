type Circle = {
  shape: "circle";
  radius: number;
};

type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

type Shape = Circle | Rectangle;
const calculateShapeArea = (shape: Shape) => {
  if (shape.shape == "circle") {
    return 3.14 * shape.radius ** 2;
  } else if (shape.shape == "rectangle") {
    return shape.height * shape.width;
  }
};

console.log(calculateShapeArea({ shape: "circle", radius: 5 }));
console.log(
  calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  })
);
