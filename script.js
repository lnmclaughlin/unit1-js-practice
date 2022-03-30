document.write("JavaScript works!");
console.log("Hello console!");
console.warn("This is only a test!");

let myName= "Laurie";
let workFromHome= "true";
let side= 15; 
let radius= 10;

console.log("My name is" + myName);
console.log("I work from home:" + workFromHome);
console.log("The length of each side of the square is " + side);
console.log("The radius of the circle is " + radius);

let circleArea = Math.PI *radius *radius; 
let circlePerimeter = 2 * Math.PI * radius; 
let squareArea = side * side ;
let squarePerimeter = 4 * side;

console.log("The circle area is " + circleArea + " and the perimeter is " + circlePerimeter);
console.log("The square area is " + squareArea + " and the perimeter is " + squarePerimeter);

let TravelOptions= ["foot", "bike", "car", "airplane"];
console.log("The Travel Options are: ");
console.log(`1) ${TravelOptions[0]}`);
console.log(`2) ${TravelOptions [1]}`);
console.log(`3) ${TravelOptions [2]}`);
console.log(`4) ${TravelOptions [3]}`);
