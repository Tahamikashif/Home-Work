"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
let user_codepin = 1234;
let out_put = ["samad", "hamza", "maryam", "omer",];
const inquirer_1 = __importDefault(require("inquirer"));
const user = await inquirer_1.default.prompt([
    {
        name: "pin",
        type: "input",
        message: "your id card pin code",
    },
    {
        name: "pin1",
        type: "input",
        message: "whats your name"
    },
]);
console.log(user.pin);
if (user.pin == user_codepin) {
    console.log("your pin code is correct");
}
else {
    console.log("try again");
}
console.log(user.pin1);
if (user.pin1 == out_put.length) {
    console.log("you naming convention is true");
}
else {
    console.log("wrong typing !");
}
