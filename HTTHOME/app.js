"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
let atmAccount = 42101123;
let atm = [];
let currentB = 20000;
const inquirer_1 = __importDefault(require("inquirer"));
const atmAcc = await inquirer_1.default.prompt([
    {
        name: "pin",
        type: "number",
        message: "put your current num!",
    }
]);
console.log(atmAcc.pin);
if (atmAcc.pin == atmAccount) {
    console.log("your are correct");
}
else {
    console.log('your atm number is not correct');
}
;
if (atmAcc.pin == atmAccount) {
    let checkacc = await inquirer_1.default.prompt([
        {
            name: "pin1",
            type: "confirm",
            message: "what do you want to draw ",
        }
    ]);
    console.log(checkacc.pin);
}
;
