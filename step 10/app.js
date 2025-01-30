"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompts_1 = require("@inquirer/prompts");
const prompts_2 = require("@inquirer/prompts");
const prompts_3 = require("@inquirer/prompts");
const inquirer_1 = __importDefault(require("inquirer"));
let passwordss = '12345';
const inmessage = await (0, prompts_1.input)({
    message: "whats your name",
});
console.log(inmessage);
const assing = await (0, prompts_2.password)({
    message: 'whats your pass num',
});
if (assing === passwordss) {
    console.log("correct password");
}
else {
    console.log('not correct');
}
const ages = {
    firstage: await (0, prompts_3.number)({ message: "whats your ages" }),
};
console.log(ages.firstage);
const choicess = await inquirer_1.default.prompt([
    {
        name: 'ch',
        type: "list",
        choices: ["12", "13", "14", "15", "16", "17"],
        message(answers) {
            console.log("please select the correct choice");
        },
    }
]);
console.log(choicess.ch);
if (choicess.ch == ages.firstage) {
    console.log("correct age");
}
else {
    console.log("not correct age");
}
const governer = await (0, prompts_1.input)({
    message: 'whats your governer name'
});
console.log(governer);
const student = await (0, prompts_1.input)({
    message: "whats your name from giaic student"
});
console.log(student);
const rollNo = await (0, prompts_3.number)({
    message: 'whats your rollno'
});
console.log(rollNo);
const time = await (0, prompts_3.number)({
    message: "whats your timing",
});
console.log(time);
const day = await inquirer_1.default.prompt([
    {
        name: "days",
        type: 'list',
        message(answers) {
            console.log("whats your day ");
        },
        choices: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
    }
]);
console.log(day.days);
console.log(("you are eligible for this course"));
