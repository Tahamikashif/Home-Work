"use strict";
/*console.log("Guess a number between 1 to 8");
// now varible create
let a:number=Math.floor(Math.random()*7)
import inquirer from "inquirer";
while(true){
let input = await inquirer.prompt([
{name: "guess",type:"number",
message(answers) {
    
"Enter your guess number you want between 1 to 8:"}}
])

// provide code
let ans:number= input.guess
if (a==ans)
{console.log("congratulation your guess number is correct")
break;}
else{console.log("Sorry you guess wrong number try again ")}

}

*/
Object.defineProperty(exports, "__esModule", { value: true });
/*
function greeting(name:string,name1:string):string{
return name + name1



}

let tup = greeting("taha",'mujtaba')
console.log(tup)

setTimeout(() => {

console.log("taha and mujtaba are you ready")



},5000)




function washingmachine(): Promise <string> {
return new Promise ((resolve, reject) => {
    setTimeout(() => {

const speed = false
if(speed){

resolve ("machining procss is done")


}
else{

reject ("machine is not run")

}


    },8000)
})



}
washingmachine()

.then((value) => {

  console.log("clothes are washeable")


})
.catch((error) => {
console.log("clothes are dirty")


})
.finally(() => {

console.log("washing succesful")



})
*/
// email
/*

interface person {

name:string,
phoneNo:number,
house_no:number,
email:string,
emailaddress:{
   addressTO:string,
   addressCC:string

}
solutation:string,
subject:string
thanksfully:string


}


let person_information:person ={
name:"tahami",
phoneNo:3112121,
house_no:250,
email:"school principle @gmail.com",
emailaddress:{
addressTO:'school head @gmail.com',
addressCC:'class_teacher@gmail.com',


},
solutation:"Dear sir",
subject:"i am writing to let you know about i am not attend the school meting because my parents are going to international trip this reason i not attend  i requested this meeting you willbe recontinou from next 7 days ",

thanksfully:"x y z"
}

console.log(person_information)


// tupples


let tupples:[string,number] = ["taha",123]
console.log(tupples)



function greeting(name:number,name1:number):void{
return



}

console.log(greeting(123,223))
*/
// hoisting
//console.log(tamasha)
//let tamasha = "ahahhaah"
// callback function
//function nawaz (time:string){
//console.log("my time is bad" + text)}
/*function nawazz(tele:string,nawaz:(time:string) => void){
   return nawaz(tele)



}
nawazz("telephone" +text,time)
console.log(nawazz) */
// rest parameter
/*
function rest_parameter(index:string,...index1:string[]){
return index + " " + index1.join("")


}
let rest = rest_parameter('ahmed', " mujahid ", "ajmer")
console.log(rest)
*/
// syntax error
//  lett message:string = "manna"
//  console.log(message)
// type error
// let messagess:string ="munna"
// console.loger(messagess)
// type aliases
/*
type purses  ={

name:string,
brand_name:string,
shopAdd:string,
bargaining:boolean


}

let bags:purses = {

name:"safina",
brand_name:"gul ahmed",
shopAdd:"karachi",
bargaining:false


}

if(bags.bargaining){

console.log("nice shop seller")

}
else{

console.log("bargaining is very bad")


}
*/
// let arr:number[]= [1,2,3,4,5]
// let result = arr.map(num => num + 2)
// console.log(result)
// let arr:number[]= [1,2,3,4,5]
// let result = arr.filter(num => num + 2)
// console.log(result)
// let arr:number[]= [1,2,3,4,5]
// let result = arr.reduce((acc,current) => acc + current,0 )
// console.log(result)
// let arr:number[]= [1,2,3,4,5]
// let result = arr.splice(2)
// console.log(result)
/*
let passwords= 12123
import { input, select } from "@inquirer/prompts";
import { number } from "@inquirer/prompts";
import inquirer from "inquirer";
import { confirm } from "@inquirer/prompts";
import { password } from "@inquirer/prompts";

const quickmessage = await input({

message:"what is your name giaic student"

})

console.log(quickmessage)

const quicknumber = await number ({
message:'whats your rollno'

});

const allmessages = await inquirer.prompt([
{

name:"all",
type:'list',
message(allmessages) {
  "please vrify your rollno"
},
choices:["123","234","345","456"]


}
])
console.log(allmessages.all)

if(quicknumber == allmessages.all){


    console.log("your verification is succesful")


}

else{
      console.log("your  verification is not succesful")
    
}

const days  = ({
firstmessage:await input({message:'which day are you going  to giaic'}),

})

const daysselect = await inquirer.prompt([
{

      name:'select',
       type:"list",
       message(answers) {
          "select the option"
  },

            choices:["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]


}


])
console.log(daysselect.select)

if(days.firstmessage == daysselect.select){


   console.log("your day are correct")



}
else{

console.log("your day is not today")


}

const confirmation = {

  firstconfirm:await confirm ({message:"you are pakistani"})



}

console.log(confirmation);

if(confirmation){

console.log("you are nationwide pak")


}
else{

   console.log("you are not nation wide")


}
const pass = await password ({
message:"whats your password"



})
console.log(pass)
if (pass) {
  setTimeout(() => {console.log("succesful")},5000)
  
}



else {
     console.log("not succesful")
}

                           console.log("         The  end       ")

*/
// type student ={
// name:string,
// fatherName:string,
// cnic_no:number,
// phoneNo:number,
// confirmation:boolean
// houseNO:string
// }
// let Student:student = {
// name:"tahami",
// fatherName:"kashif",
// cnic_no:234567,
// phoneNo:311234567,
// confirmation:true,
// houseNO:"karachi"
// }
// console.log(Student)
// // hoisting
// console.log 
//  var a = 10;
// export {} ;
// // function hoisting
// console.log(greeting(123," 12 "))
// function greeting(name:number,name1:string){
// return name + name1
// }
//  // rest parameter
// // function aslam(names:string,...name:string[]){
// // return names + " " + name.join("")
// // }
// let parameter = aslam("taha","  aslam  ","shahid")
// console.log(parameter)
// function shah (namesss:string):void{
// }
// // let personInfo:number[] = [1,2,3,4,5,6]
// // let result = personInfo.map(num => num * 2)
// // console.log(result)
// let personPush:string[] = ["tahami","babar","amjad","sagar","abuzhar"]
// personPush.push("ahmed")
// personPush.pop()
// personPush.unshift("0,-1")
// personPush.shift()
// console.log(personPush)
// import { confirm, input } from "@inquirer/prompts";
// let todo = []
// let condition = true;
// while(condition){
// const question1 = await input({
// message:"whats to add more in your todos"
// })
// console.log(question1)
// const question2 = await confirm({
// message:"what to add more in your todoss"
// })
// console.log(question2)
// todo.push(question1)
// console.log(todo)
// }
// import chalk from "chalk"
// let person_name:number[] = [1,2,3,10,23,12,13,14,15]
// for(let i = 0; i<person_name.length; i++){
// console.log(chalk.blue(person_name[i]))
// }
// let insaneName:string[] = ["tahami","mohsin","jabbar","aslam"]
// for (let i = 0; i<insaneName.length; i++){
// console.log(chalk.blue(insaneName[i]))
// }
