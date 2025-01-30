#! usr/bin/env node 
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
let calculator = [];
const inquirer_1 = __importDefault(require("inquirer"));
const calculatorans = await inquirer_1.default.prompt([
    {
        name: "cal1",
        type: "input",
        message: "to put your pin "
    }
]);
console.log(calculatorans.cal1);
let calculator2ans = await inquirer_1.default.prompt([
    {
        name: "cal2",
        type: "confirm",
        message: "you more addid pin code"
    }
]);
console.log(calculator2ans.cal2);
calculator.push(calculatorans);
