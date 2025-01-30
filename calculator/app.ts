#! usr/bin/env node 


let calculator:number[] = []


import inquirer from "inquirer"


const calculatorans = await inquirer.prompt([

{

name:"cal1",
type:"input",
message:"to put your pin "



}


])


console.log(calculatorans.cal1)

let calculator2ans = await inquirer.prompt([

{
   name:"cal2",
   type:"confirm",
   message:"you more addid pin code"



}


])

console.log(calculator2ans.cal2)

calculator.push(calculatorans)



















