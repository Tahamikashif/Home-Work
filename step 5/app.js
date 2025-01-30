"use strict";
// 100 days of challenge;
let laptop_including = {
    make: "HP",
    model: '2018',
    year: "2020",
    describe() {
        console.log(`this laptop is make ${this.make} and model is ${this.model} and year is ${this.year}`);
    }
};
laptop_including.describe();
//Array Destructuring: Given an array of objects representing different laptops, each with properties `make`, `model`, and `year`, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
// ARRAY DESTRUCTING 
let laptop = [
    { make: "dell", year: '2019', model: "2017" },
    { make: "hp", year: '2020', model: "2018" },
    { make: "LEnovo", year: '2021', model: "2019" }
];
let [laptop1, laptop2, laptop3] = laptop;
console.log(laptop1);
console.log(laptop2);
console.log(laptop3);
// Combining operator with spread operator
let setlaptop1 = [1200, 1500, 6000];
let setlaptop2 = [1300, 1400, 18000];
let setlaptopCombined = [...setlaptop1, ...setlaptop2].sort((a, b) => a - b);
console.log(setlaptopCombined);
// REST PARAMETER
function Abid(name, ...hobby) {
    return name + " " + hobby.join(" ");
}
const nameSS = Abid("anana", 'you enjoy picnic', 'you enjoy the park');
console.log(nameSS);
// multiline template literals
let message = `include ideal day
 
 1.waking up early in he morning and going job
 2. back to home 
 3. night dinner and quickly sleep for the next day
 
 
 
 `;
console.log(message);
// exercise 51
function calculateArea(length, width) {
    return length * width;
}
let calculateAreaArrow = (length, width) => length * width;
console.log(5 * 8);
