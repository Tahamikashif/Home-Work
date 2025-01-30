"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
let totalBalance = 10000;
let pinnumber = 1234;
const inquirer_1 = __importDefault(require("inquirer"));
const pin_machine = await inquirer_1.default.prompt([
    {
        name: "pin",
        type: "number",
        message: "put your pin code",
    }
]);
console.log(pin_machine.pin);
if (pin_machine.pin === pinnumber) {
    console.log("your correct number");
}
else {
    console.log("your number isn,t correct!");
}
if (pin_machine.pin == pinnumber) {
    let atmmachine = await inquirer_1.default.prompt([
        {
            name: "pin1",
            type: "list",
            message: "what do you want to draw",
            choices: [
                "fast cash",
                "withdraw",
            ]
        }
    ]);
    console.log(pin_machine.atmmachine);
}
if (pin_machine.atmmachine == "withdraw") {
    let withdraw1 = await inquirer_1.default.prompt([
        {
            name: "pin2",
            type: "number",
            message: "how do you amount to draw",
        }
    ]);
    console.log(withdraw1.pin2);
    if (totalBalance >= withdraw1.pin2) {
        totalBalance -= withdraw1.pin2;
        console.log(`your remaining balance is ${totalBalance}`);
    }
    else {
        console.log(`you have in sufficient balance is  ${totalBalance} `);
    }
}
else if (pin_machine.atmmachine == "fast Cash") {
    const fastCash1 = await inquirer_1.default.prompt([
        {
            name: "pin3",
            type: "input",
            message: "choose the amount",
            choices: [1000, 2000, 3000]
        }
    ]);
    console.log(fastCash1.pin3);
}
