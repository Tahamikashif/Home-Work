// import { number } from "@inquirer/prompts";
// import inquirer from "inquirer";
// import Choices from "inquirer/lib/objects/choices.js";

// const Randomnumber =Math.floor( 10000 + Math.random() *9000)

// let My_balance:number = 12000;

// const Ans = await inquirer.prompt([
// {
// name:"ans",
// type:"input",
// message:"Enter your number",
// validate:function(value){
// if(value.trim() !== ""){
//   return true;
// }
// return "please put the Non-empty Name"

// },
// },
// ])
// console.log(Ans.ans)

// const ans1 = await inquirer.prompt([
// {
// name:"a",
// type:"rawlist",
// message:"please choose the course",
// choices:["Ms.Excel","Ms.Word","Typescript","javascript"]
// }
// ])
// console.log(ans1.a)

// const tutionfee:{[key:string]:number} = {
// "Ms.Excel":1200,
// "Ms.Word":1000,
// "Typescript":1500,
// "javascript":3000,
// }

// console.log(`\n Tution Fee:${tutionfee[ans1.a]} \n`)
// console.log(`\n My_balance:${My_balance}`)




// const Payment = await inquirer.prompt([

// {
// name:"payment",
// type:"checkbox",
// message:"please choose the payment method",
// choices:["Bank Transfer","Easy Paisa"]
// },
// {
// name:"amount",
// type:"number",
// message:"please enter the amount"

// }
// ])
// console.log(Payment.amount)
// console.log(My_balance -= Payment.amount)

// let TutionFee = tutionfee[ans1.a]
// let PaymentAmount = parseFloat(Payment.amount)

// if(TutionFee == PaymentAmount){

// console.log(`\n Congratulations! you are enroll in ${ans1.a} course`)

// }
// else{

// console.log("try again")


// }

/*
import { number } from "@inquirer/prompts";
import { timeLog } from "console";
import inquirer from "inquirer";
let condition = true;
let time = true

const message = await inquirer.prompt([

{
name:"m",
  type:"input",
    message:"please put the name",
     validate:function(value){
        if(value.trim() !== ""){
          return true;

        }
        else{

            return "Invaid please put the name"
        }



     }
},
{

name:"n",
 type:"number",
   message:"please put the number and game started"
}
])
console.log(message.m)
if(message.m == message.m.toLowerCase() ){
console.log("Ok Correct")

}
else{

console.log("please put the name in lowercase")
}


if(message){

const FormatTime = (time:number):string=> {

const Min = Math.floor(time/60)
const sec = time % 60

return `${String(Min).padStart(2,"0")}:${String(sec).padStart(2,"0")}`


}
if(message.n === FormatTime){
console.log("ok")

}

else{

console.log("not correct")

}

}

*/
                     //////////////////////  Contdown Timer /////////////////


// import inquirer from "inquirer";
// import {differenceInSeconds} from "date-fns"
// import chalk from "chalk";
// const ans = await inquirer.prompt([{

//   name:"user_nput",
//    type:"number",
//     message:"please enter the number in Countdown Timer",
//      validate:(input) => {

//       if(isNaN(input)){
//        return "please enter valid number"
//       }else if(input >60){

//        return "please seconds must be in 60"

//       } else{
//          return true;
      
//       }
//     }
// }]);



// let input = ans.user_nput;

// function StartedTime(value:number){
//    const initTime = new Date().setSeconds(new Date().getSeconds() + value)
//    const timeinterval = new Date(initTime)
// setInterval((() => {

//  const currentTime = new Date()
//  const difference = differenceInSeconds(timeinterval ,currentTime)

// if(difference <= 0){
//  console.log(chalk.blueBright("Timer has expired"))
// process.exit()
// }
// const Min = Math.floor((difference%(3600*24))/3600);
// const sec = Math.floor(difference%60)
// console.log(`${Min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`)

// }),1000)

// };

// StartedTime(input)



// const students_names:number[] = [1,2,3,4,5];
// const result = students_names.reduce((acc,current) => acc + current ,0 )
// console.log(result)

// const students_names:number[] = [1,2,3,4,5];
// const result = students_names.map(num =>  num * 2  )
// console.log(result)


// const students_names:number[] = [1,2,3,4,5];
// const result = students_names.filter(num =>  num % 2 == 0 )
// console.log(result)


// const students_names:number[] = [1,2,3,4,5];
// const result = students_names.filter(num =>  num % 2 == 0 )
// console.log(result)

// const students_names:number[] = [1,2,3,4,5];
// const result = students_names.includes(6)
// console.log(result)

// const students_names = ["a","b","c"];
// const result = students_names.join("-")
// console.log(result)

// assignability error

// const student = "tahami"
// student = "salamn"
// console.log(student)

/// Syntax error
// lett students:string = "taha"
// console.log(students);

/// type error

// let message:string = "salaman";
// console.loger(message)

// strong typing

// let message:string = "messa"// strong typing
// let a = "usa" // type inerence
// console.log(message)
// console.log(a)


// // import export ECMAScript module

// import a from "./first.js"
// import {b,c} from "./second.js"

// console.log(a+b+c)


import inquirer from "inquirer";
import chalk from "chalk";
let balance = 12000;

const pass = 1231234;

console.log(chalk.blueBright("Welcome to Giaic "))
const messa = await inquirer.prompt([

{
name:"m",
type:"input",
message:"how are you "
}
])
console.log(messa.m)

const messa1 = await inquirer.prompt([
{
name:"m1",
type:"number",
message:"whats your roll no"
}
])
console.log(messa1.m1)

const messa2 = await inquirer.prompt([
{
name:'m2',
type:"password",
message:"whats your password from giaic or id card"
}
])
console.log(messa2.m2)

if(pass == messa2.m2){

console.log(chalk.blueBright("Correct password"))


}

else{

console.log("Wrong pass try again")


}

const messa3 = await inquirer.prompt([
{

name:"m3",
type:"input",
message:"whats your name",
validate: function(value){
if(value.trim() !== ""){
return true;

}else{

return "please enter valid name"


}

}
}
])
console.log(messa3.m3)

const messa4 = await inquirer.prompt([
{
name:"m4",
type:"list",
message:"please choose the option and purchase",
choices:["Canteen giaic","Shop"]

}
])
console.log(messa4.m4)

if(messa4.m4 == "Canteen giaic"){

  const messa5 = await inquirer.prompt([
{
name:"m5",
type:"list",
message:"how to purchase",
choices:["banana","eggs","fries","chips","burger",'roll boti']


}

  ])
console.log(messa5.m5)


}
else if(messa4.m4 === "Canteen giaic"){
const messa6 = await inquirer.prompt([
{
name:"m6",
type:"number",
message:"put the quantity"
},
])

console.log(messa6.m7)


}

const messa7 = await inquirer.prompt([
{

name:"m7",
type:"number",
message:"please put the amount"

}
])
console.log(messa7.m7)

if(balance >= messa7.m7){
balance -= messa7.m7
console.log(chalk.blueBright(`your remaining balance is ${balance}`))


}
else{

console.log("you have insufficient balance is")


}




setTimeout(() => {

console.log(chalk.blueBright("Ok Go Home"))


},1000)