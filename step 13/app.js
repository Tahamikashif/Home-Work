"use strict";
/*import inquirer from "inquirer";
import {input,confirm} from "@inquirer/prompts"
let condition = true;

while (condition) {

let message = await input({

message:"how to purchase"

})
console.log(message)

if(message){
   console.log("ok")

}

else{

   console.log("not ok")

}


const  message1 = await inquirer.prompt([

{
name:"messa1",
type:"list",
message(answers) {
    console.log("please choose the product")
},
choices:["bread","eggs","milk","snacks"]
}

])
console.log(message1.messa1)



let message2 = await inquirer.prompt([{
  name:"messa2",
  type:"number",
    message(answers) {
        console.log("please put the quantity")
    },
    
    }])
    
console.log(message2.messa2)

const message3 = message2.messa2 * 200
console.log(message3)

const message4 = await confirm({

message:"more adding "

})
console.log(message4)
condition = message4
}

*/
/*
import inquirer from "inquirer";
import { input, number, select } from "@inquirer/prompts";
import chalk from 'chalk';
let seat = 2233;
let pass = 123445
console.log(chalk.bgBlue("WELCOME TO GIAIC"))
const question = await input({

message:"whats yor name"

})
console.log(question)

const question1 = await number({
message:"whats your age"
})
console.log(question1)

const question2 = await inquirer.prompt([
{
name:"q2",
type:'list',
message(answers) {
    console.log("please choose the age")
},
choices:["12","13","14","15","16","17",'18','19',"20"]
}
])
console.log(question2.q2)

if(question1 == question2.q2){
console.log(chalk.greenBright('right age'))
}
else{

console.log("not right age")
}

const question3 = await number({
message:"whats your roll no"

})
console.log(question3)

const question4 = await inquirer.prompt([{

name:"q4",
type:"list",
message(answers) {
    console.log("please select the day")
},
choices:["monday","tuesday","wednesday",'thursday',"friday","saturday","sunday"]
}]);

console.log(question4.q4)

const question5 = await number({

message:"please put the seat number"
})
console.log(question5)

if(seat == question5){

console.log("right seat number")


}
else{

  console.log("not correct seat number")

}

const question6 = await inquirer.prompt([
{

name:"q6",
type:"password",
message(answers) {
    console.log("put the password")
},
}


])
console.log(question6.q6)
if(pass == question6.q6){

console.log("correct")
}
else{

console.log("not correct")

}
if(question1 == question2.q2){
    setTimeout(() => {console.log(1 * question2.q2)},3000)
}

else{
    console.log("not correct age")
}

*/
/*
// tupples
let tupples:[number,string] = [1,'taha']
console.log(tupples)

//

const arrow = ((num:number) => {

 return num

})
arrow(7)
console.log(arrow(6))



// array methods

let studentInfo:string[] = ["tahami","wasil","mujtaba","amjad"]
studentInfo.push("asad")
studentInfo.unshift("suf")
studentInfo.pop()
console.log(studentInfo)


*/
/*
import inquirer from "inquirer";
let arr:number[] = [ ];
import chalk from "chalk";
let table:number[] = [1,2,3,4,5,6,7,8,9,10]
for(let i=0; i<table.length;i++){
let firstM =  await inquirer.prompt([

{
name:"firstMn",
type:"number",
message(answers) {
    console.log("please put the first number")
},

}

])
console.log(firstM.firstMn)

let SecondM = await inquirer.prompt([
    {
    name:"secondMn",
    type:'number',
    message(answers) {
        console.log("please put the second number")
    },
    }
    


])
console.log(SecondM.secondMn)
arr.push(SecondM.secondMn)
console.log(chalk.bgCyanBright

    (firstM.firstMn * SecondM.secondMn))

}

*/
