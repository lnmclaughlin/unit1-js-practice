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
console.log("The Travel Options are:");
console.log(`1) ${TravelOptions[0]}`);
console.log(`2) ${TravelOptions [1]}`);
console.log(`3) ${TravelOptions [2]}`);
console.log(`4) ${TravelOptions [3]}`);

let travelType = prompt("How would you like to travel?");
console.log(`Travel Type: ${travelType}`);

let distance =100;
let time = 0;
let cost = 0;

if (travelType === "foot") {
console.log( "Walking is free! Speed is 3mph.");
cost = 0;
time = distance / 3;
}
else if (travelType === "bike") {
let rentBike= prompt ("Do you need to rent the bike? (yes or no)"); 
if (rentBike === "yes") {
    console.log("Bike rental is $45! Speed is 10mph.");
    cost = 45;
} else {
console.log ("Biking is free! Speed is 10mph.")
cost = 0; 
}
time = distance / 10;
}
else if (travelType ==="car") {
console.log("Driving is $0.25/mi. Speed is 60mph.");
cost = 0.25 * distance;
time = distance / 60; 
}
else if (travelType === "airplane") {
let passengerCount= prompt ("How many passengers?");
console.log("Flying is $0.10/mi. Speed is 400mph.");
cost = 0.10 * distance * passengerCount; 
time = distance / 400; 
}
else {
    console.log(`Sorry. ${travelType} is an invalid option.`);
}
console.log(`Traveling ${distance} miles by ${travelType} took ${time} hours and cost $${cost}!`);
