/* import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {message(answers) {
       console.log( "enter first number")
    },type:"number", name: "FirstNumber"},])
console.log(answer.FirstNumber);

const answer1 = await inquirer.prompt([
{
name:"SecondNumber",
type:"number",
message(answers) {
    console.log("Enter Second number")
},

}
])
console.log(answer1.SecondNumber)
const operator = await inquirer.prompt([

{
name:"operat",
type:"select",
message(answers) {
    console.log("please choose one operator")
},
choices:["addition","subtraction","muliplication","division"]
}
])
console.log(operator.operat)

//conditional statement

 if( operator.operat === "addition") {
console.log( answer.FirstNumber + answer1.SecondNumber);


}else if(operator.operat === "subtraction"){
    console.log( answer.FirstNumber - answer1.SecondNumber); 

}else if(operator.operat === "multiplication"){

    console.log( answer.FirstNumber * answer1.SecondNumber);

}else if(operator.operat === "division"){

    console.log( answer.FirstNumber / answer1.SecondNumber);

}else{

console.log("please select valid operator");


} 
document.getElementById("Result")?.innerText == "Result" 

*/
/*

import { input, number, confirm} from "@inquirer/prompts";
import chalk from "chalk";
import inquirer from "inquirer";
let pass = 2233;
let arr = [ ]
let balance = 12000
let bakeryTax = 10
let condition = true
while(condition){
const message = await input({

message:"how to purchase"

})
console.log(message)
arr.push(message)
console.log(arr)

const message1 = await number({
 message:"whats your rollNo"
})
console.log(message1)


const message2 = await inquirer.prompt([
{
 name:"m2",
  type:'password',
    message(answers) {
      console.log("whats your password")
},
}
])
console.log(message2.m2)
if(message2.m2 == pass){
console.log(chalk.blueBright("Correct Password"))
}
else{

console.log("Not Correct password")

}

const message3 = await input({

    message:"please put the quantity"
})
console.log(message3)

const message4 = await inquirer.prompt([

{
   name:"m4",
    type:"list",
     message(answers) {
        console.log("please chose the cash menu")
    },
         choices:["withdraw","fastcash"]

}
])
console.log(message4.m4)

if(message4.m4 == "withdraw"){

const withd = await inquirer.prompt([
{
name:"with",
  type:"number",
    message(answers) {
      console.log("please put the amount")
},
}
])
          console.log(withd.with)

if(balance >= withd.with){
balance -= withd.with
balance -= bakeryTax
setTimeout(() => {console.log(chalk.blueBright(`your rmaining balance is ${balance}`))},5000)
}
else{

 console.log("not enough balance")


}
}

else{

const Fast = await inquirer.prompt([
{
name:"fast",
 type:"select",
   message(answers) {
    console.log("please chose the  fast cash")
},
choices:["1000","1500","2000","280","290","300","400","500","680","480","890"]
}
])
console.log(Fast.fast)
if(balance >= Fast.fast){
    balance -= Fast.fast
    balance -= bakeryTax
    setTimeout(() => {console.log(chalk.blueBright(`your rmaining balance is ${balance}`))},4000)

    }
    else{
    
     console.log("not enough balance")
    
    
    }
}
const message5 = await confirm({
message:"more continuing"

})
console.log(message5)
condition = message5
}

        setTimeout(() => {console.log("The End")},4000)   

*/

import { number, password } from "@inquirer/prompts"

//  let Student_info:string[] = ["ahmed","asad","aslam"]
// console.log(Student_info)
// for(let i=0;i<Student_info.length;i++){
// console.log(Student_info[i])
// }
/*
import inquirer from "inquirer";
import { input } from "@inquirer/prompts";
let Times:number[] = [1,2,3,4,5,6,7,8,9,10]
let arr = []

for(let i=0; i<Times.length; i++){
let message = await inquirer.prompt([
{
name:"m",
type:"number",
message(answers) {
    console.log("please put the first num")
},
}
])
console.log(message.m)

let message1 = await inquirer.prompt([

{
name:"m1",
type:'number',
message(answers) {
    console.log("please put the second num")
},
}
])
console.log(message1.m1)

console.log(arr.push(message.m * message1.m1))
console.log(arr)
}

*/
/*
import inquirer from "inquirer";
import { input, number, password } from "@inquirer/prompts";
import chalk from "chalk";
let pass = 2233;
let gmail = "1122gmail.com"
let students_name = []

const message  = await input({

message:"whats your name"
})
console.log(message)
students_name.push(message)
console.log(students_name)
const message1 = await  number({
message:"whats your rollno"
})
console.log(message1)

const message2 = await inquirer.prompt([
{
message(answers) {
    console.log("whats your password")
},
name:"m2",
type:"password",
}
])
console.log(message2.m2)
if(pass == message2.m2){
    console.log(chalk.blueBright("Correct password"))
    }
    else{
    
    console.log("Not correct password")
    
    
    }

const message3 = {

firstM:await input({message:"whats your gmail id"})
}
console.log(message3.firstM)
if(gmail == message3.firstM){
console.log("correct gmail")

type gmail = {

    to:string,
    solutation:string,
    subject:string,
    hopeness:string,
    thanks:string,
}

let Gmail:gmail = {

to:"teacher@gmail.com",
solutation:"Dear sir/madam",
subject:"i am writing to let you know about the school teacher are changing kindly for my request school teacher not change but teacher teaches very nice Ok",
hopeness:"I hope you will consider my application",
thanks:"sir/ madam"



}

console.log(Gmail)

}
else{

console.log("not correct gmail")


}

*/

// nested object aliase

type book = {

name:string,
lastName:string

}
type Books = {
Name:book,
message:string



}

let Bookss:Books = {

Name:{
name:"essential",
lastName:"typescript"


},
message:"Nice book"



}
console.log(Bookss)


interface personMale{
name:string,
fatherName:string


}
interface PersonFemale{

name1:string,
fatherName1:string


}

type intersection_type = personMale & PersonFemale 


let  obj:intersection_type = {

name:"asad",
fatherName:"kashif",
name1:"tahami",
fatherName1:"kashif"





}

console.log(obj)

// hoisting

// console.log(a)
// let a:string = "asad"


// syntax error

// lett b:string = "zafar",
// console.log(b)

// type error

// let b:string = "zafar"
// console.loger(b)

// type annotation

// let a = "asad";
// let b:string = "asad";// type annotation
// // let c = 1122;

// // array methods

// // let arr:number[] = [1,2,3,4,5];
// // let result = arr.filter((num) => num  % 2 === 0)
// // console.log(result)

// // let arr:number[] = [1,2,3,4,5];
// // let result = arr.reduce((num,acc) => num + acc)
// // console.log(result)

// // let arr:number[] = [1,2,3,4,5];
// // arr.push(9);
// // arr.unshift(0);
// // arr.pop()
// // arr.shift()
// // console.log(arr)

// import inquirer from "inquirer";
// import { input,confirm } from "@inquirer/prompts"
// import chalk from "chalk"
// let balance:number = 12000;
// let listing = [];
// let CompanyTax = 20;
// let condition = true
// while (condition){
// const message = await input({
// message:"how are you"
// })
// console.log(message)
// const message1 = await inquirer.prompt([
// {

// name:"m1",
//  type:"select",
//   message(answers) {
//     console.log("how to add in list")
// },
//   choices:["snacks","milk","bread","eggs","paratha","halwa pori"]
// }
// ])
// console.log(message1.m1)
// listing.push(message1.m1)
// console.log(listing)

// const message2 = await inquirer.prompt([

// {
// name:"m2",
// type:"number",
// message(answers) {
//     console.log("please put the quantity")
// },
// }
// ])
// console.log(message2.m2)

// const message4 = await inquirer.prompt([
// {
// name:"m4",
// type:"rawlist",
// message(answers) {
//     console.log("please choese the cut cash")
// },
// choices:["WITHDRAW","FAST CASH"]
// }
// ])
// console.log(message4.m4)

// if(message4.m4 == "WITHDRAW"){
// const message5 = await inquirer.prompt([
// {
// name:"m5",
// type:"number",
// message(answers) {
//     console.log("please put the amount")
// },
// }
// ])
// console.log(message5.m5)
// if(balance >= message5.m5){
// console.log(message2.m2 * message5.m5)   
// balance -= message5.m5
// balance -= CompanyTax
// console.log(chalk.greenBright(`your remaining balance is ${balance}`))

// }
// else{

// console.log("not enough balance")

// }

// }
// else if(message4.m4 == "FAST CASH"){
// const message6 = await inquirer.prompt([
// {
// name:"m6",
// type:"rawlist",
// message(answers) {
//     console.log("please choose the fast amount on menu")
// },
// choices:["100","200","300","400",'180',"120","150","190"]
// }
// ])
// console.log(message6.m6)
// if(balance >= message6.m6){
//     balance -= message6.m6
//     balance -= CompanyTax
//     console.log(message2.m2 * message6.m6)
//     setTimeout(() => {console.log(chalk.blueBright(`your remaining balance is ${balance}`))},5000)
    
//     }
//     else{
    
//     console.log("not enough balance")
    
//     }
    
// }
// const message7 = await confirm({
// message:"more adding list"
// })
// console.log(message7)
// condition = message7
// }

// setTimeout(() => {console.log(chalk.blueBright("THE END"))},6000)


// next.js installation
// mkdir => full form makedirectory
// cd => full form change directory

//////////////////////////////////////////////////////////////////////////////////////////////

// import inquirer from "inquirer";
// import { input } from "@inquirer/prompts"
// let add = [];
// let condition = true
// while (condition){
// const message =  await number({
// message:"put your first number"

// })
// console.log(message)
// const message1 = await inquirer.prompt([
// {
// name:"m1",
// type:"number",
// message(answers) {
//     console.log("put the second number")
// },
// }
// ])
// console.log(message1.m1)

// const message2 = await inquirer.prompt([
// {
// name:"m2",
// type:"number",
// message(answers) {
//     console.log("whats to add in more todos")
// },
// }
// ])
// console.log(message2.m2)

// message2.m2 = condition
//}

// import inquirer from "inquirer";
// import { input } from "@inquirer/prompts"
// let input_list = []
// let timer:number[] = [1,2,3,4,5,6,7,8,9,10]
// const question = await input({
// message:"whats your name"

// })
// console.log(question)
// input_list.push(question)
// console.log(input_list)

// const question1 = await number({
// message:"whats your age"
// })
// console.log(question1)
// input_list.push(question1)
// console.log(input_list)
// const question2 = await password({
// message:"whats your password"
// })
// console.log(question2)
// input_list.push(question2)
// console.log(input_list)

// const question3 = await inquirer.prompt([
// {
// name:"q3",
// type:"number",
// message(answers) {
//     console.log("please put the number and timer start them")
// },
// }
// ])
// console.log(question3.q3)
 

// function greet(name:number,name1:number){
// return name + name1

// }
// greet(5,6)
// console.log(greet(5,6,))

// const arrowgreet = (name:number,name1:number) => {

// return name1 * name
// }
// let result = arrowgreet(2,4)
// console.log(result)


// // hoisting

// // console.log(a)
// // let a:string = "ahmed"

// // type annotation

// let results = "asad";
// let message:string = "tahami"; // this is type annotation
// console.log(message)


// let Student_info:number[] = [1,2,3,4,5,6,7,8,9]
// Student_info.push(11)
// Student_info.unshift(-1)
// Student_info.pop()
// Student_info.shift()
// console.log(Student_info)


// //http://localhost => http://127.0.0.1 aik hi baat h ya likho ya yaa likho


// // http://localhost:3000 :3000 => ports

// // http full form => hyper Text transfrm protocol


// // git config --global user.name "ameen alam"
// // git config --global user.email "thameekashif@gmail.com"





































































































































































































































































