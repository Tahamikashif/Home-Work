/*                                        First program

import inquirer from "inquirer";
import chalk from "chalk";
let pass = 112233;
let balance = 12000;
let Taxcompany = 20;
let arr = []
const Q1 = await inquirer.prompt([
{

 name:"q1",
  type:"input",
    message:"whats your name"
}

])
  console.log(Q1.q1.arr)
   arr.push(Q1.q1)
    console.log(arr)

const Q2 = await inquirer.prompt([


{
 name:"q2",
  type:"number",
    message:"whats your age"

}
])
console.log(Q2['q2'])

const Q3 = await inquirer.prompt([

{
name:"q3",
 type:"password",
   message:"whats your password"

}
])
console.log(Q3.q3)

if(pass == Q3.q3){

console.log(chalk.blueBright("correct password"))

}
else{

console.log("not correct password")

}


const Q4 = await inquirer.prompt([
{
name:"q4",
  type:"input",
    message:"how to purchase"
}
])
console.log(Q4.q4)

const Q5 = await inquirer.prompt([
{

name:"q5",
 type:"number",
   message:"put the quantity"

}
])
console.log(Q5.q5)

const Q6 = await inquirer.prompt([
{
name:"q6",
 type:"list",
  message:"please select the option to cut prices ",
   choices:["Withdraw","Fast cash"]
}
])
console.log(Q6.q6)

if(Q6.q6 == "Withdraw"){
const Q7 = await inquirer.prompt([
{
name:"Q7",
 type:"number",
   message:"please put the amount"

}
])
console.log(Q7.Q7)

if(balance >= Q7.Q7 ){
balance -= Q7.Q7 * Q5.q5
balance -= Taxcompany
console.log(chalk.blueBright(`your remaining balance is ${balance}`))
}

else{

console.log("Not enough balance")

}

}

else if(Q6.q6 == "Fast cash"){

const Q8 = await inquirer.prompt([

{
name:"q8",
 type:"list",
  message:"please choose the amount",
   choices:["1000","2000","3000","4000","5000",'6000',"7000","8000","120",'170','160','150','250','380','480','680','580']
}
])
console.log(Q8.q8)
if(balance >= Q8.q8){
    balance -= Q8.q8 * Q5.q5
    balance -= Taxcompany
    console.log(chalk.blueBright(`your remaining balance is ${balance}`))
    }
    
    else{
    
    console.log("Not enough balance")
    
    }



}
 setTimeout(() => {console.log(chalk.greenBright("OK GO HOME"))},4000)



*/
/*

import inquirer from "inquirer";
import { input } from "@inquirer/prompts";
import chalk from "chalk";
let tablets = ["risek 40mg",'lowplate','thyronorm','panadol','brufen',];
let balance = 13000;
const message = await inquirer.prompt([
{

name:"m",
type:"input",
message:"put the name"
}
])
console.log(message.m)

const message1 = await inquirer.prompt([
{
name:"m1",
type:"number",
message:"how to purchase"


}
])
console.log(message1.m1)
let arr = tablets.concat(message1.m1)
console.log(arr)
console.log(tablets)
console.log(chalk.greenBright("thanks to purchase"))


if(tablets == message1.m1){

const message2 = await inquirer.prompt([
{
name:"m2",
type:"select",
message:"please choose the cuting product menu",
choices:["withdraw","fast cash","cash deposite"]
}
])
console.log(message2.m2)

if(message2.m2 == "withdraw"){

const message3 = await inquirer.prompt([
{
name:"m3",
type:"number",
message:"put the product amount"
}
])
console.log(message3.m3)
if(balance >= message3.m3){
  balance -= message3.m3
console.log(`your remaining balance is${balance}`)
}
else{

console.log("not enough balance")

}
}
else if(message2.m2 == "fast cash"){

const message4 = await inquirer.prompt([
{
name:"m4",
type:"number",
message:"please put the fast amount"
}
])
console.log(message4.m4)
if(balance >= message4.m4){
  balance -= message4.m4
console.log(`your remaining balance is${balance}`)
}
else{

console.log("not have a balance")


}
}
else if(message2.m2 == "cash deposite"){

const message5 = await inquirer.prompt([
{
name:"m5",
type:"number",
message:"please put the add amount"
}
])
console.log(message5.m5)
if(balance >= message5.m5){
  balance += message5.m5
console.log(`your balance is${balance}`)
}
else{
console.log("not add balance")

}



}


}
else{

console.log("not balance")

*/
//////////////////    Typescript Timer      /////////////////////
/*
import inquirer from "inquirer";
import {differenceInSeconds} from "date-fns";
import chalk from "chalk";
import { number } from "@inquirer/prompts";
const res = await inquirer.prompt(
{
name:"userInput",
type:"number",
message:"please enter the number",
});
let input = res.userInput;

function Starttime(val:number){
const inittime = new Date().setSeconds(new Date().getSeconds() + val)
const intervaltime = new Date(inittime)
setInterval((() => {

  const currTime = new Date();
  const timdiff = differenceInSeconds(intervaltime,currTime)


  if(timdiff <= 0){

console.log(chalk.blueBright("Timer has expired"))
process.exit()
  }
  const min = Math.floor((timdiff%(3600 * 24))/3600)
  const sec = Math.floor(timdiff%60)
  console.log(`${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`)

}),1000)

}

Starttime(input);

*/
// import chalk from "chalk";
// import inquirer from "inquirer";
// let Pkr = 280;// Usd
// let Ind = 1.99;
// let Curr:any = {
// USD:1,
// POUND:0.12,
// EURO:0.99,
// IND:1.99,
// }
// const Cc = await inquirer.prompt([
// {
// name:"c",
// type:'input',
// message:"put the Currency"
// }
// ])
// console.log(Cc.c)
// const Cc1 = await inquirer.prompt([
// {
// name:"c1",
// type:"select",
// message:"click the option ",
// choices:["USD","EURO","POUND","IND"]
// }
// ])
// console.log(Cc1.c1)
// const Cc2 = await inquirer.prompt([
//   {
//   name:"c2",
//   type:"number",
//   message:"Please put the amount with the help of click option"
//   }
//   ])
//   console.log(Cc2.c2)
// const Cc3 = await inquirer.prompt([
// {
// name:"c3",
// type:"list",
// message:"please click the convered amount",
// choices:['Pkr',"Ind","Bang"]
// }
// ])
// console.log(Cc3.c3)
// if(Cc3.c3 === "Pkr"){
// console.log(chalk.blueBright(Pkr * Cc1.c1))
// }
// let FRomAmount = Curr[Ind * Cc1.c1]
// console.log(FRomAmount)
// interface
// interface PerInfo {
// name:string,
// Fathername:string,
// email:string,
// PhoneNo:number
// }
// let Per:PerInfo = {
// name:"Tahami",
// Fathername:"Kashif",
// email:"thameekashif@gmail.com",
// PhoneNo:1234,
// }
// Per.name = "aslam"
// console.log(Per)
// type Aliase Object
// type CarModel = {
// name:string,
// Fullname:string
// model:number
// year:number
// }
// let cars:CarModel = {
// name:"Toyota",
// Fullname:"Toyota yaris",
// model:2024,
// year:2019
// }
// console.log(cars)
// intersection type
// type CarModel = {
//   name:string,
//   Fullname:string
//   model:number
//   year:number
//   }
// type Truck = {
// nameT:string,
// fullnameT:string
// ModelT:number
// }
// type intersectiontype = CarModel & Truck
//   let cars:intersectiontype = {
//   name:"Toyota",
//   Fullname:"Toyota yaris",
//   model:2024,
//   year:2019,
//   nameT:"Hijet",
//   fullnameT:"Hijet Bus",
//   ModelT:2018
//   }
//   cars.name = "Civic"
//   console.log(cars)
/*
 
import inquirer from "inquirer";

const currency:any = {

USD:1,
GBP:0.76,
Ind:74.57,
EURO:0.76,
PKr:280

}

const User_rate = await inquirer.prompt([

{
name:"from",
type:"list",
message:"Enter from currency",
choices:['USD','GBP','EUR','PKR','INR']
},

{

name:"To",
type:"list",
message:"Enter to Currency",
choices:['USD','GBP','EUR','PKR','INR']
},


{

name:"amount",
type:"number",
message:"Enter the amount"
}

])
let FromAmount = currency[User_rate.from]
let Toamount = currency[User_rate.To]
let Amount = User_rate.amount
let BaseAmount = Amount / FromAmount
let convertedAmoun = BaseAmount * Toamount
console.log(convertedAmoun)
console.log(FromAmount)
console.log(Toamount)
*/
// import inquirer from "inquirer";
// let timer = [1,2,3,4,5];
// let condition = true;
// while (condition){
// const message = await inquirer.prompt([
// {
// name:"m",
// type:"number",
// message:"please put the number 1-20 "
// }
// ])
// console.log(message.m)
// for(let i=0; i<timer.length; i++){
// console.log(timer[i])
// console.log(message.m === timer)
// }
// condition = message.m
// }
import inquirer from "inquirer";
let Randomnumber = Math.floor(Math.random() * 10 + 2);
let balance = 200;
const guess_Number = await inquirer.prompt([
    {
        name: "user",
        type: "input",
        message: "please guess a number between 1-10"
    }
]);
console.log(guess_Number.user);
if (guess_Number.user === Randomnumber) {
    const guess = await inquirer.prompt([
        {
            name: 'g',
            type: "number",
            message: "whats your trying number guessing game"
        }
    ]);
    console.log(guess.g);
    if (balance >= guess.g) {
        balance -= guess.g;
        console.log(`your remaining balance is ${balance}:"Congratulation"`);
    }
    else {
        console.log(`your remaining balance is ${balance} try again`);
    }
}
