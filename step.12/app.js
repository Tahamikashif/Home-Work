/*
/*let Student:number = 121234

import inquirer from "inquirer";
import { input, number, password } from "@inquirer/prompts";

const studentInfo = await input ({

message:'whats your name'

});
console.log(studentInfo)

const studentPERinfo = await password({
message:"what is your password"

})

console.log(studentPERinfo);
const studentHouse = await number({

message:"what is your house no"


})

console.log(studentHouse)

if(studentHouse === Student){

console.log("correct answer")

}
else{

console.log("not correct ans")

    
}

interface STudentemail {

to:string,
cc:string,
subject:string,
solutation:string,
thanksfully:string



}

let email:STudentemail = {

    to:"principle@gmail.com",
    cc:"classteacher@gmail.com",
 solutation:"Dear sir/madam",

 subject:"i am writing to let you know about the  karachi weather is very beautiful and rain is vry heavy this reason i will not ome to the school this reason i am not attend the class of the school  i hope you will consider my application  and work it",
 thanksfully:"x,y,z"



}

console.log(email)

const inform =  await inquirer.prompt([
{
name:"i1",
type:"input",
message(answers) {
    console.log("whats your fullname")
},

}
])


console.log(inform.i1)

*/
/*
import { input, number } from "@inquirer/prompts"
import { match, rejects } from "assert"
import { colorNames } from "chalk"
import { promises } from "dns"
import { resolve } from "path"
import { text } from "stream/consumers"

// type aliase
type aliase = {

name:string,
fullname:string,
fathername:string,
email_address: {

father:string,
mother:string,


}


}

let allignment:aliase = {

name:'tahami',
fathername:"kashif",
fullname:"tahami kashif",
email_address:{
father:"kashif@gmail.com",
mother:"asma@gmail.com"


}

}

console.log(allignment)

// rest param
function restParam(name:string,...name1:string[]){
return name + "" + name1.join("")

}


// let namess = restParam("taha",' tahami ','junaid')

// console.log(namess)



// // callback function
// function greeting(name2:string){

// console.log("this is my text" + text)



// }

// function grees(name3:string,greeting:(name2:string) => void){

// return greeting(name3)



// }

// console.log(grees("naveed" + text , greeting))

/*
let studentName = true



let tupples:[number,boolean] = [12,true]
console.log(tupples)



let arr:number[] = [1,2,3,4]
arr.push(7)
arr.unshift(0,-2)
arr.pop()
arr.shift()
console.log(arr)


let bakk:number[] = [100,200,300]
let BakeryItem:string[] = ["eggs","bread","chips","juices","butter"]

import inquirer from "inquirer";
import { input, number } from "@inquirer/prompts";

const  bakers = await input({

message:"how to purchase"


})
console.log(bakers)

const bakerss = await number({
message:"please enter the quantity"


})
console.log(bakerss)

const bakerssI = await inquirer.prompt([
{
name:"bake",
type:"list",
message(answers) {
    console.log("please check the amount")
},
choices:["egg = 25","bread = 120","pizza = 100"]


}



])
console.log(bakerssI.bake)


const bakerssItem = await input ({

message:"please put the quantity "


})
console.log(bakerssItem)

const bakerssItems = await number({
message:"please pay the amount"


})

console.log(bakerssItems)

if(bakerssI.bake.bakk == bakerssItem){

console.log("ok thanks")



}
else{

console.log("no not go ")



}*/
/*
interface personInfo {

name:string,
fatherName:string,
motherName:string,
email:string
address:number



}
let person:personInfo = {
name:"tahami",
fatherName:"kashif",
motherName:"aasma",
email:"tahami@giemail.com",
address:2345



}
person.address = 123

console.log(person)
*/
// import { input } from "@inquirer/prompts"
// import { text } from "stream/consumers"
/*
import inquirer from "inquirer";
import {input,confirm} from "@inquirer/prompts";
import chalk from "chalk";

let prices = 1000;
let listmenu:any = [""];

let listi = await input(
{
message:"how to purchase"

}
)
console.log(listi);

let listI = await input(
{
message:"ad to purchasing quantity"
}
)

console.log(listI)
listmenu.push(listI)

let listP = await inquirer.prompt([

 {
name:"listp",
type:"list",
message(answers) {
    console.log("please select the purchasing price")
},
choices:["100","25","35","200"]


 }
])
console.log(listP.listp)
const listadd = await confirm({
message:"more add and purchas "


})
console.log(listadd);
if(prices >= listP.listp){
    prices -= listP.listp
    console.log(`your remaining balance is ${prices}`)
    
    
    
    }
    
    else{
    
    console.log("you have no insufficient balance is")
    
    
    
    }
    

let listIb = await input(
    {
    message:"ad to purchasing quantity"
    }
    )
    
console.log(listIb)

let listPi = await inquirer.prompt([

    {
   name:"listp",
   type:"list",
   message(answers) {
       console.log("please select the purchasing price")
   },
   choices:["100","25","35","200"]
}
])

console.log(listPi.listp)


if (prices >= listP.listp){
prices -= listP.listp
console.log(chalk.blue(`your remaining balance is ${prices}`))



}

else{

console.log("you have no insufficient balance is")



}
*/
/*
let student:string = "ahmed";
console.log(student)


type per = {

name:string,
fullname:string,
phoneNo:number



}

// anounymous object

let teach:{fullfun:string,fullfan:string} = {

fullfun:"picnic",
fullfan:"pics"



}

console.log(teach.fullfan)
console.log(teach["fullfun"])



 let personS:per = {

name:"wasil",
fullname:"kashif",
phoneNo:123



 }

console.log(personS)


import a from "./app1.js";
import b from "./app1.js";
import {c,d} from "./app2.js";

console.log(a + b + c + d)


// nested object

type author = {

 firstname:string,
 secondname:string



}

type book = {
  FIRSTNAME:author,
  name:string



}


const mybook:book = {
FIRSTNAME:{

    firstname:"essential",
    secondname:"typescript",




},

name:"tahami"


}

console.log(mybook)


function  fetch():Promise <string>{
return new Promise ((resolve,reject) => {
    
setTimeout(() => {

const succes = false

if(succes){
 resolve("washing is started")}

else{
reject("washing is not done")}


},5000)

})

}

fetch()
.then((value) => {

  console.log("clothes are drying")



})

 .catch((error) => {

   console.log("washing is not's done")


 })

   

.finally(() => {

 console.log("clothes are soaking")



})

*/
/*
import inquirer from "inquirer";
import { input, number,confirm } from "@inquirer/prompts";


const message = await input({

  message:"whats your name"

})
console.log(message)

const  messages = await number({
message:"whats your age"

})
console.log(messages)

const messagesss = await inquirer.prompt([
{
name:"mes1",
type:"list",
message(answers) {
    console.log("please confirm the age")
},
choices:["12",'13','14','15','16','17','18','19','20','21','22','23','24','25']

}


])

console.log(messagesss.mes1)
if(messagesss.mes1 == messages){
setTimeout(() => {
    
    console.log("correct you are nice !")}
    ,3000)


}
else{

console.log("not correct")


}


let messagesss1 = await input({
message:"how to purchase"


})
console.log(messagesss1)

const messagesss2 = await input({
message:"how to quantity"



})

console.log(messagesss2)




if(messagesss1){

let arr:number[] = [1]
const result = arr.map(num => num * 100)
console.log(result)


}

const messagesss3 = await confirm({

message:"more add to quantity"



})
console.log(messagesss3)




// function greeting (sal:string,tamatus:string):void{

// return

// }

// console.log(greeting("taha","tamanna"))

let arr:number[] =[1,2,3,4,5]
let result = arr.filter(num => num % 2 === 0)
console.log(result)

*/
/*

let st:string = " ahmed";
console.log(st)


//anounymous object

// let started:{name:string,names:string} ={

// name:"tahami",
// names: " ahmed",



// }

// console.log(started)


import inquirer from "inquirer";
import { input,confirm } from "@inquirer/prompts";
const StudentNames = [];
let condition:number[] = [1,2,3,4,5]


let ConstM = await input({

message:"how to purchase"


})
console.log(ConstM)

const costn = await confirm({

message:"more add to todos list"


})
console.log(costn)

 StudentNames.push(costn)
 
 if(costn){
  console.log("ok to add more")

 let Costs = await input ({
message:"add own list"
 
 })

  }
 
  
   /////////////////////////////  2   ///////////////////////////
  
   let Consts = await confirm({

    message:"how to purchase"
    
    
    })
    console.log(Consts)
    
    const costp = await confirm({
    
    message:"more add to todos list"
    
    
    })
    console.log(costp)
    
     StudentNames.push(costn)
     
     if(costp){
      console.log("ok to add more")
    
     let Costs = await input ({
    message:"add own list"
     
     })
    console.log(Costs)
      }
     
      else{
    
        console.log("This is your result ")
       
       }
      
*/
// let tupples:[number,string,boolean] = [1,"ahmed",true]
// console.log(tupples)
// // rest param
// function rest(name:number,...name1:number[]){
// return name + " " + name1.join()
// }
// let result = rest(1 , 2 , 3 , 4)
// console.log(result)
// function callback(naes:string){
// console.log("my name is" + text)
// }
// // function callcama(name2:string,callback:(naes:string) => void){
// // return callback(name2)
// }
// callcama("ahmed"+text,callba
// syntax error
// lett message = "aslam"
// console.log(message)
// let message = 123;
// console.loger(message)
/*
//anounymous object
 let obj:{name:string,name1:string} = {
 name:"shafiq",
 name1:"shahid"

 }
console.log(obj['name'])

// alised object
type studentBook ={
 name1:string,
 name2:string

}

let book:studentBook = {

name1:"essential",
name2:"typescript",



}
console.log(book)

// nested object

 type bookname = {
name:string,
name1:string

 }
type bookslibrary = {
Name:bookname,
names:string


}

let Books:bookslibrary = {

Name:{

name:"Essential",
name1:"typescript"


},
names:"Tahami books"

}
console.log(Books)


// intersection types

interface manager {

name_id:string,
nameselection:string,

}

interface boss {
 name_id1:string,
 workday:string



}
type intersection_type = manager & boss

let obj1:intersection_type = {
name_id:"sai ji",
name_id1:"sett",
workday:"excellent",
nameselection:"all"

}

console.log(obj1)

*/
/*
import inquirer from "inquirer";
import { input,confirm, select, number } from "@inquirer/prompts"
import Choices from "inquirer/lib/objects/choices.js"
let names = [];
let condition = true;
let price = 1000
while(condition){
const message = await input({

message:"whats your name"

})
console.log(message)
const message1 = await input({

  message:"how to purchase"

})
console.log(message1)

console.log(message1)
names.unshift(message1)


let bakers = await inquirer.prompt([
{

name:"bak1",
type:"select",
message(answers) {
  console.log("please select the bakeshp")
},
choices:["bread","eggs","milk","chips"]


}

])
console.log(bakers.bak1)
if(bakers.bak1 == message1){

console.log(`ok thanks for purchase ${message1}`)


}
else {

console.log("not enough the product")

}
let bakePrice = await inquirer.prompt([
{

name:"bakep1",
type:"list",
message(answers) {
  console.log("please select the product purchasing amount ")
},
choices:['100','120','140','150','10','200','300','500']



}
])
console.log(bakePrice.bakep1)

if(price >= bakePrice.bakep1){
price -= bakePrice.bakep1
console.log(`your remaining balance is ${price}`)




}
else{

console.log(`insufficient balance is ${price}`)



}
const conf = await confirm({

message:"more addition own list"


});
console.log(conf)
condition = conf

if(conf){

console.log("Quick add")



}
else{
setTimeout(() => {console.log("OK GO HOME")},5000)}


}

*/
// annotation    jis mn type declare ho woh khlati h type annotation
// let message:string = "aslam"
// console.log(message)
/*
interface person {

name:string,
fathername:string,
email:string,
phNo:number
home_address:number



}
let Person:person = {
name:"tahami",
fathername:"kashif",
email:"@gmail.com",
phNo:123456,
home_address:123


}
console.log(Person)


// intestion type


interface book {

name:string,
fathername:string


}

interface copy{

teacher_teach:string,
workout:number

}

type intersection_type = book & copy

let mixture:intersection_type = {

  name:"ESSENTIAL",
  fathername:"TYPESCRIPT",
teacher_teach:"EXCELLENT",
workout:121234



}
console.log(mixture)


// alised object

type bags = {

  types:number,
  names:string

}

let BAGS:bags = {

types:3,
names:"gul ahmed,sana safinaz",

}

console.log(BAGS)

// nested object

type Author = {

  name:string,
  Strongname:string

}

type BOOK = {

  Name:Author,
  message:string

}

let Book:BOOK = {

Name:{

  name:"TYPESCRIPT",
  Strongname:"NEW ADDITION"

},
message:"my best book"

}
console.log(Book)

// type inference

let infer = 123
infer = 234
console.log(infer)

// strong typing

let strong:string = "mall";
console.log(strong)

//  reassinable const & let variables

const str:number = 434;
console.log(str)

// explict casting

let message:unknown = "syeds"
console.log((message as string).length)

console.log((<string>message))



// lambda or arrow function

const arr = ((a:number,b:number) => {

return a + b

})

console.log(arr(15,15))
// regular function

function fun(name:string,name1:string){

return name + name1


}

console.log(fun("taha ","  nnahmed "))

*/
// let promise = new Promise((resolve,reject)=> {
// console.log('wasing started')
// const condition = true
// setTimeout(() => {
// if(condition){
// resolve("washing machine is started")
// }
// else{
// reject("clothes is not done")
// }
// },5000)
// })
// .then()
// promise.then(() => {
// console.log("clothes are soaking")
// })
// .catch()
// promise.catch((error) => {
// console.log("clothes are not soak")
// })
// promise.finally(() =>{
// console.log("clothes is ready")
//})
// union literals
// let num:string | number = 123
// num ="ahmed"
//console.log(num)
// 
/*
import { input,confirm } from "@inquirer/prompts";
import inquirer from "inquirer";
let condition = true;
let numlist = [];
const randomNumber = Math.floor(Math.random() *10+1)
while(condition){
const message = await inquirer.prompt([

{
 name:"mes",
 type:"number",
message(answers) {
  console.log("plese put the number between 1-10")
},
}
])

console.log(message.mes)

const message1 = await inquirer.prompt([
{

name:"mes1",
type:"confirm",
message(answers) {
  console.log("repeat the number list")
},

}

])
console.log(message1)


if (message.mes === randomNumber){
console.log("congratulation")



}

else {

console.log("try again")

}
console.log(message.mes)
numlist.push(message)
condition == message1.mes1

}

*/
// Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
// function refactoringArea(width:number,height:number):number{
// return width * height
// }
// let refactoringAreaArrow = (width:number,height:number) => 
//  width * height
// console.log(refactoringArea(2,3))
// // smartphone details
// interface phoneDetail{
// make:string,
// model:number,
// manufacture:number
// phone:string
// species:{
// storage:string,
// RAM:number,
// ROM:number
// }
// }
// // let smartphone:phoneDetail =  {
// // make:"samsung",
// // phone:"tecno spark",
// manufacture:2018,
// model:2021,
// species:{
//   storage: "64 GB",
//   RAM:14,
//   ROM:50,
// }
// }
// console.log(smartphone)
/*

import inquirer from "inquirer";
import { input, number, password } from "@inquirer/prompts";
import chalk from "chalk"
let pass_person = 223344;
let condition = true;
let mess3 = ["monday"];
const message = await inquirer.prompt ([{
name:"mess",
type:"input",
message(answers) {
  console.log("whats your name")
},
}]);
if ( message.mess) {
  console.log("you are correct name")
}
else{

console.log("not correct name!")

}


const message1 = await number({
message:"whats your roll number"

})
console.log(message1)

const message3 = await inquirer.prompt([
{

name:"mes3",
type:"list",
message(answers) {
  console.log("which day are you going from giaic")
},
choices:["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
}
]);
console.log(message3.mes3)
mess3.concat(message3.mes3)
if(message3.mes3 == mess3){

console.log("you are eligible for this day")



}
else{

console.log("not eligible")

}

const message2 = await inquirer.prompt([{
  name:"mes2",
  type:"password",
  message(answers) {
    console.log("please put the password")
  },
  }])
  console.log(message2)
  
  if(message2.mes2 == pass_person){
  setTimeout(() => {console.log("you are succesful")},5000)
  
  }
  else{
  
  console.log("try again")
  }

setTimeout(() => {console.log(chalk.yellow("          OK    GO    GIAIC...        "))},7000)


*/
// array method
// let students:number[] = [1,2,3,4,5,6,7]
// let result = students.reduce((acc,current) => acc + current )
// console.log(result)
// let students:number[] = [1,2,3,4,5,6,7]
// let result = students.map(num => num * 2 )
// console.log(result)
// let students:number[] = [1,2,3,4,5,6];
// students.push(11)
// students.pop()
// students.unshift(0,-2)
// students.shift()
// console.log(students)
/*
interface informationBooks {

name:string,
fullname:string,
cost:number,
manufacture:string,


}
let BOOKS:informationBooks = {

name:'Essential',
fullname:"typescript 2024",
cost:20000,
manufacture:"2023 end",

}
console.log(BOOKS)

// nested object

type furniture = {

name:string,
shopName:string,
address:string

}

type Mattress = {

Name:furniture,
address_matt:string | number


}
let Complete_furniture:Mattress = {

Name:{
name:"expensive",
shopName:"bhadrabad" + 12,
address:"block 12",

},
address_matt: 12 + "blocks"


}

console.log(Complete_furniture)


// explict casting

let students_name:unknown = "syed"
console.log((students_name as string).length)
console.log(<string>students_name)

// intersection types

interface crowd {

capacity_crowd:number,
experiance_crowd:string

}

interface insane {

  capacity_insane:number,
  experiance_insane:string


}

type intersection_type = crowd & insane

let obj1:intersection_type = {


  capacity_crowd:1000,
  experiance_crowd:"excelent",
  capacity_insane:2000,
  experiance_insane:"nice"

}
console.log(obj1)
console.log(obj1.capacity_crowd)
console.log(obj1['capacity_insane'])



// regular function

// function Parents(name:string,name1:string):void{

// return
// }
// Parents("taha","asad")
// let par = Parents("taha","asad")
// console.log(par)

// rest parameter

function restPParam(name:string,...name1:string[]){
return name + " " + name1.join("")

}
restPParam("taha","asad","farukh","sattar")
let rest = restPParam("taha"," asad  "," farukh  ","sattar")
console.log(rest)


// tupples
const tupples:[number,boolean,string,] = [1,true,"sami",]
console.log(tupples)

//  callback function

let fun = ((numbers:number,num:number) => {

return numbers * num

})
fun(4,5)
console.log(fun(4,5))

let fans = ((numbers:number,num:number) => {

return numbers + num

})
console.log(fans(4,5))

*/
// type error
// let mess = 'first'
// console.loger(mess)
// syntax error
// lett messa = 'firdas'
// console.log(messa)
// assignability error
// const message:string = "tahami";
// message = 123
// console.log(message)
// function asad(name:string) {
//   return name
// }
// asad("usama")
// console.log(asad("usama"))
// let asada = (names:string):string => 
//   names
// console.log(asada("taha"))
// const fun = ((name:number,name1:number) => {
// return name + name1
// })
// console.log(2,5)
// // tupples
// let tupples: [number,string] = [2,"taha"]
// console.log(tupples)
// rest parameter
/*
import inquirer from "inquirer";
import { confirm } from "@inquirer/prompts";
import chalk from "chalk";
let condition = true
while(condition){
const message = await inquirer.prompt([
{

name:"messa",
type:"number",
message(answers) {
  console.log("put the first number")
},

}
])
console.log(message.messa)

const message1 = await inquirer.prompt([
{
 name:"messa1",
   type:"number",
     message(answers) {
        console.log("put the second number")
},
}
])
console.log(message1.messa1)
const message2 = await inquirer.prompt([
{

name:"operator",
type:"list",
message() {
  console.log("select the operator")
},
choices:["addition","subtraction","multiplication","division"]

}
])
console.log(message2.operator)


if(message2.operator == "addition"){
console.log(message.messa + message1.messa1)
}

else if(message2.operator == "subtraction"){

console.log(message.messa - message1.messa1)


}


else if(message2.operator == "multiplication"){

  console.log(message.messa * message1.messa1)
  
  
  }

  else if(message2.operator == "division"){

    console.log(message.messa / message1.messa1)
    
    
    }

     const message3 = await confirm({
         message:"more calculating"

          })


condition = message3

setTimeout(() => {

  console.log(chalk.greenBright(               "Ok thanks for calculating"                  ))


},5000)




  }

*/
// function
// function greeting(name:number,name1:number){
// return name * name1
// }
// greeting(2,3)
// console.log(greeting(2,3))
// lambda or arrow function
// const lambda = ((name:string,name2:string) => {
// return name + name2
// })
// console.log(lambda ("taha","wasil"))
// // tupples
// let tupples:[number,string] = [1,"asad"]
// console.log(tupples)
// // paramiter rest
// function restParm(name:string,...name1:string[]) {
//   return name + '' + name1.join('')
// }
// restParam('taha',"wasil","asad")
// console.log(restParam('taha',"  wasil  ","asad"))
// loops 
// let StudentsName:string[] = ["ahmed","asad","taha","wasil","saman"]
// for(let i=0;i<StudentsName.length; i++){
// console.log(StudentsName[i])
// }
// promises
/*
function promise() : Promise <string>  {
return new Promise((resolve,reject) => {
  console.log("washing machine is started")
setTimeout(() => {
const condition = true
if(condition){

resolve("washing machine is started")



}
else{

reject("washing machine is not run")


}



},6000)



})




}

promise()
.then(() => {

console.log("clothes are soaking")

})
.catch(() => {

console.log("clothes are not soaking")


})
.finally(() => {
console.log("washing is done")


})
*/
// hoisting
// console.log(a)
// let a:string = "tahami"
// console.log(a)
// type annotation
// let a = "asad";
// let A:number = 12// type annotation
// console.log(a,A)
/*
import { input, number, password,confirm} from "@inquirer/prompts";
import chalk from "chalk";
import inquirer from "inquirer";
let pass:number = 12344;
let balance = 7000;
let condition = true
while(condition){
const message = await input({
message:"whats your name"

})
console.log(message)

const message1 = await number({

message:"whats your age"

})
console.log(message1)

const message2 = await inquirer.prompt([
  {
    name:"messa2",
    type:"password",
message(answers) {
  console.log(" put the own password ")
},
  }
])
console.log(message2.messa2)

if(pass == message2.messa2){
console.log(chalk.blue("OK"))

}
else{

console.log(chalk.blue("not done"))
}


const message3 = await inquirer.prompt([
{
name:"messa3",
type:"list",
message(answers) {
  console.log("please select the choices")
},
choices:["withdraw","FASTCASH","enter amount","back to main menu"]
}

])
console.log(message3.messa3)

if(message3.messa3 == "FASTCASH"){

let fastcash = await inquirer.prompt([

{
name:"fast",
type:"list",
message(answers) {
  console.log("please put the amount")
},
choices:["1000","2000","3000","4000","5000"]



}





])
console.log(fastcash.fast)
if(balance >= fastcash.fast){
balance -= fastcash.fast
console.log(chalk.blueBright(`your remaining balance is ${balance}`))

}
else{

 console.log("insufficient balance is 0")

}

}
else if(message3.messa3 === "withdraw"){

let withdraw = await inquirer.prompt([
{
name:'with',
type:"number",
message(answers) {
  console.log("please put the withdraw amount")
},
}

])
console.log(withdraw.with)
if(balance >= withdraw.with){
  balance -= withdraw.with
  console.log(chalk.blueBright(`your remaining balance is ${balance}`))
  
  }
  else{
  
   console.log(`insufficient balance is 0`)
  
  }
  

}

else if(message3.messa3 == "enter amount"){
const enterA = await inquirer.prompt([
{
name:"EnterM",
type:"number",
message(answers) {
  console.log("please put amount and save")
},
}
])
console.log(enterA.EnterM)
if(balance += enterA.EnterM){
  console.log(`your save balance is  ${balance}`)
  

}
else{

console.log("not save")
}

}

const message4 = await confirm({

message:"more adding "

})
console.log(message4)
condition = message4
if(message3.messa3 == "back to main menu"){

const message5 = await inquirer.prompt([
{
name:"messa5",
type:"number",
message(answers) {
  console.log("back to main menu press 0")
},
}
])
console.log(message5.messa5)
message5.messa5 = message4
}
}
*/ ///////////////////////////////////////////////////////////////
// regular function
//  function greet (name:number,name1:number){
// return name * name1
//  }
// const greets = (name:number,name1:number) => {
// return name * name1
// }
// greets(6,7)
// console.log(greets(6,7))
// // tupples
// let tupples:[number,boolean] = [4,true]
// console.log(tupples)
// // rest parameter
// function restP(name:string,...name1:string[]){
// return name + name1.join("")
// }
// console.log(restP('asad','   salman   ','mustafa'))
// callback function
// function callback(name:string){
// console.log('my name is taha'+ text)
// }
// function callmama(name1:string,callback:(name:string) => string){
// return callback(name1)
// }
// callmama("asad"+ text)
// console.log(callmama("asad"+ text))
// array method
// const message = await input({
// message:"whats your game name"
// })
// console.log(message)
// function mul(name:number){
// return name
// }
// mul(6)
// console.log( message.repeat(mul(6)))
// import { input } from "@inquirer/prompts"
// import inquirer from "inquirer";
// let add = ['']
// let fruits:string[] = ["banana","grapes","chiku","mumphali","watermelon"];
// const message = await input({
// message:"whats to add"
// })
// console.log(message)
// add.push(message)
// const message1 = await inquirer.prompt([
// {
// name:"messa1",
// type:"input",
// message(answers) {
//   console.log("which to new add in the menu")
// },
// }
// ])
// console.log(message1.messa1)
// if(message1.messa1 == fruits){
// console.log("ok right fruits")
// }
// else{
// console.log("not right")
// }
// nested object
// type Author = {
// name:string,
// fullname:string,
// }
// type Book = {
// Name:Author,
// message:string
// }
// let Books:Book = {
// Name:{
// name:"ESSENTIAL",
// fullname:"typescript",
// // },
// message:"hi hello"
// }
// console.log(Books)
// // alised type
// type Samsung = {
// model:string,
// manufacture:number,
// name:string
// }
// let obj:Samsung = {
// model:'2019',
// manufacture:2018,
// name:"QTAB"
// }
// console.log(obj)
// // intersection type 
// interface Bookss {
// name:string,
// model:string
// }
// interface chap {
//   name1:string,
//   message:string
// }
// type intersection_type = Bookss & chap
// let Objs:intersection_type = {
//   name:"Essential 2018",
//   model:"2018",
//   name1:"essent",
//   message:"this is chap 1"
// }
// console.log(Objs)
// type error
// let standard_s:string = "stand up"
// console.loger(standard_s)
// syntax error
// lett standard:string =  "essan";
// console.log(standard)
// let arr_s:string[] = ["asad","saman","sasu","salman"];
// arr_s.push("safii");
// arr_s.unshift("susuu");
// arr_s.shift()
// arr_s.pop()
// console.log(arr_s)
// let arr_ss:number[] = [1,2,3,4,5]
// let result = arr_ss.reduce((acc,current) => acc + current)
// console.log(result)
// let arr_ss:number[] = [1,2,3,4,5]
// let result = arr_ss.map(num => num * 2)
// console.log(result)
// let arr_ss:number[] = [1,2,3,4,5]
// let result = arr_ss.filter((num => num % 2 === 0 ))
// console.log(result)
/*
import inquirer from "inquirer";
import { input, select } from "@inquirer/prompts";
import chalk from "chalk";
let balance = 8000;

const question = {

firstQ:await input({message:"how to purchase"}),
secondQ :await input({message:"put the name to purchase"})
}
console.log(question.firstQ)
console.log(question.secondQ)

const question1 = await inquirer.prompt([
{

   name:"q1",
    type:"list",
       message(answers) {
        console.log("please choose the purchase")
  },
         choices:["cash ","fast cash","cash deposite"]
}
])
console.log(question1.q1)

   if(question1.q1 == "cash"){

const questions = await inquirer.prompt([

{
  name:"q3",
   type:"number",
    message(answers) {
      console.log("please put the amount")
},
}
])
  console.log(questions.q3)
  }
 else if(question1.q1 == "fast cash"){
const question2 = await inquirer.prompt([
  {
name:"q2",
  type:"list",
   message(answers) {
    console.log("please choose the amountss")
},
     choices:["100","200","300","400","500","600","120","170","190","250","280"]
}
  ])
console.log(question2.q2)
  const question5 = await inquirer.prompt([

{
name:"q5",
type:"number",
message(answers) {
  console.log("put the quantity")
},
}
  ])
    console.log(question5.q5)
    
    
    if(balance >= question2.q2){
      console.log(question5.q5 * 1,balance -= question2.q2 )
     balance -= question2.q2
      console.log(chalk.blueBright(`your remaining balance is ${balance}`))


}
else{

console.log("not enough balance")

}
 }

 else if(question1.q1 == "cash deposite"){
const question4 = await inquirer.prompt([
{

name:'q4',
type:'rawlist',
message(answers) {
  console.log("choose and put the number")
},
choices:["1000","2000","3000","4000","5000"]

}


])
console.log(question4.q4)
if(balance >= question4.q4){
balance -= question4.q4
console.log(`your remaining balance is ${balance}`)

}
else{

console.log("not balance")
}
}

*/
// import a from "./app1.js";
// import b from "./app1.js"
// import {c,d} from "./app2.js"
// console.log(a+b,c,d)
///////////////////////////  ******** balanc tax cut application ********* ////////////////////
/*
import inquirer from "inquirer";
import { input, number, password } from "@inquirer/prompts";
import chalk from "chalk";
let pass = 1245;
let balance:number = 12000;
let cutTax = 200;
let cut_with = 20;
  const m1 = await input({
    message:"how are you"
    })
   console.log(m1)
    const m2 = await number({
      message:"whats your age"
})
   console.log(m2)

       const m3 = await inquirer.prompt([
{

      name:"m33",
         type:"password",
            message(answers) {
              console.log("put the password")
},
}
])
      console.log(m3.m33)
         if(pass == m3.m33 ){

        console.log(chalk.blueBright("correct password"))
        
        }
        else{
        console.log("not correct ")
        }
  const m4 = await inquirer.prompt([
{
  name:"m44",
    type:"list",
      message(answers) {
         console.log("which day are you going to giaic")
},
     choices:["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]

}
]);
console.log(m4.m44);
const m5 = await input({
message:"whats your rollno"
})
console.log(m5)

const m6 = await inquirer.prompt([

{
name:"m66",
type:'select',
message(answers) {
  console.log("chose the one option")
},
choices:["WITHDRAW","FAST CASH"]
}
])
console.log(m6.m66)


if(m6["m66"] == "WITHDRAW"){

const withdraw = await inquirer.prompt([
{

  name:"with",
   type:"number",
     message(answers) {
       console.log("please put the amount")
},
}

])
console.log(withdraw.with)

if(balance >= withdraw.with){
     balance -= withdraw.with
     balance -= cut_with
      console.log(chalk.blueBright(`your remaining balance is ${balance}`))
}
else{

console.log("not enough balance")
}
}
else if(m6.m66 == "FAST CASH"){

const m7 = await inquirer.prompt([
{
  name:'m77',
    type:"list",
      message(answers) {
        console.log("put the fast amount")
},
          choices:["1000","2000","3000","4000","5000"]
}
])
console.log(m7.m77)
   if(balance >= m7.m77){
        balance -= m7.m77
         balance -= cutTax
         console.log(chalk.blueBright(`your remaining balance is ${balance}`))
}
else{

    console.log("not enough balance")
  
}
 
}

*/
/*
import inquirer from "inquirer";
import { input } from "@inquirer/prompts";
let in_arr = [ ]
let condition = true;
while(condition){
const question1 = await input ({
message:"whats to add in todos"

})
console.log(question1)
in_arr.push(question1)
console.log(in_arr)
const question2 = await inquirer.prompt([
{


name:"q2",
type:"list",
message(answers) {
  console.log("chose the choice")
},
choices:["1000","2000","3000","4000","5000"]
}
])
console.log(question2.q2)
function multi(question3:number,question2:number){
return question3 +question2


}
multi(4,2)
console.log(multi(4,2) * question2.q2)
const question4 = await inquirer.prompt([
{
  name:"q4",
  type:"confirm",
  message(answers) {
    console.log("more adding in Todos")
  },
},

])
console.log(question4.q4)
condition = question4.q4
}


*/
/*
// nested object
type author = {
name:string,
class:number,
email:string | number

}

type Book = {
Author:author,
message:string

}
let obj:Book = {

Author:{

name:"tahami",
class: 12,
email:"123@gmail.com"
},
message:"i hope you will consider my applicate"

}
console.log(obj)


// type aliase

type methane = {

color:string,
alcohol:number
}

let mixture:methane = {

color:"green",
alcohol:12
}
console.log(mixture)

// rest parameter


function restPram(name:string,...name1:string[]){

return name + "" + name1.join("")

}

console.log(restPram("asad","    taha    ",'  zubair   ',"12"))


// lambda or arrow function

const arrow = (name:string) => {
return name
}
arrow("asalam")

// assignability error

// const message = "tahami";
//  message = 12
// console.log(message)


*/
// Refactoring function
function Salam(name, name1) {
    return name + name1;
}
Salam(5, 7);
let Salman = Salam(5, 7);
console.log(Salman);
const Salmans = (name, name1) => {
    return name * name1;
};
console.log(Salmans(6, 7));
let Book_Info = {
    author: {
        firstname: "Essential",
        lastname: "Typescript",
    },
    name: "My best book is typescript"
};
console.log(Book_Info);
// explict casting
let Name = "Asad";
console.log(Name.length);
console.log(Name);
// tupples
let tupples = [1, true];
console.log(tupples);
// rest parameter
function Rest(first, ...second) {
    return first + "" + second.join('');
}
Rest("asad", "tahami", "salman");
let RestP = Rest("asas", "   tahami  ", "salman");
console.log(RestP);
// syntax error
// lett messsage:string = "tahami"
// console.log(message)
// type error
// var message:string = "salman"
// console.loger(message)
// assignability error
// const message:string = "asad"
// message = 123
// console.log(message)
// anounymous function
// strong typing
// let fulk:string = "sufi"
// let adam:string = "meezan"
// console.log(fulk,adam)
// type inferences
// const message = 'salma'
// const messa1 = 123
//anounymous object 
let address = {
    add: 1,
    add1: 12
};
console.log(address);
export {};
