"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const answer = await inquirer_1.default.prompt([
    { message: "inter first name", type: "string", name: "first name" },
    { message: "inter second name", type: "string", name: "second name" },
    {
        message: "great job",
        type: "list",
        name: "string",
        address: {
            area: "string",
            country: "string",
            concno: "number",
            zipcode: "number",
        },
    },
]);
console.log(answer);
if (answer.string === "string") {
    console.log(answer.firstname - answer.secondname);
}
else
    ("THE end");
