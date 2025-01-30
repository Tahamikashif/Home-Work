

// Syntax error

// lett message:string = "ahmed";
// console.log(message)


// type Error

// let message:string = "asad";
// console.loger(message)

// Assignability Error
//  let message = "Hello World";
//  message = 6;
//  console.log(message);

// Strong typing

// const Aslam:number = 123;
// console.log(Aslam)

// type Inference

// let a = "USA"
// let b = "Pakistan"
// console.log(a,b)


// Module

// import a from "./app1"
// import{b,c} from "./app2"
// console.log(a,b,c)


// ECMAscript.module

// import a from "./app1";
// import {b,c} from "./app2";
// console.log(a+b+c)

// import inquirer ECMAscript module

//  import inquirer from "inquirer";

//  const Ans = await inquirer.prompt([
//  {
//  name:"A",
//  type:"number",
// message:"please enter your age",

//  }
//  ])
//  console.log(`Inshallah you will + ${60 - Ans.A} + 60 years old `)

// import chalk from "chalk"

// import inquirer from "inquirer";

// const Ans = await inquirer.prompt([
// {
// name:"A",
// type:"number",
// message:"please enter your age",

// }
// ])
// console.log(chalk.blueBright(`Inshallah you will + ${60 - Ans.A} + 60 years old `))

// Uniun literals

// let message:string | boolean = "Asad"
// console.log(message)
// message = true
// console.log(message)



// object

// let Teachers = {

//  name:"saima",
//  type:"miss",
//  age:12



// }
// console.log(Teachers)

// // type declaration
// let Students: {

//     name:string
//     type:number
//     age:number
   
   
   
//    }


// Students = {

//  name:"Tahami",
//  type:123,
//  age:19,


// }
// console.log(Students.name)
// console.log(Students['age'])


// Anonymous Object


// let Sir_name:{name:string,age:number} = {

// name:"Asad",
// age:12


// }

// console.log(Sir_name.name)

// Aliased object type

// type Manager = {

// name:string,
// salary:number,
// personality:boolean
// }

// let Bank:Manager = {
//  name:"Salman",
//  salary:1200,
//  personality:true

// }

// console.log(Bank)


// Structural typing object

// interface ball {

// diameter:number
// name:string
// }


// interface Sphere {
// diameter:number,
// name:string


// }

// let Ball:ball = {diameter:10,name:'Cock ball'}
// let Sp:Sphere = {diameter:20,name:"Fruit  ball"}

// console.log(Ball , Sp)

// // Nested object

// type Book = {
//  Name:string,
//  message:string,



// }

// type Author = {
//  Names:Book
//  message:string


// }

// let Ess:Author = {

// Names:{

// Name:"Essential",
// message:"Typescript"

// },
// message:"My best book"

// }
// console.log(Ess)

// intersection type
// interface Student {
// Student_id:number
// name1:string


// }
// interface Teacher {
// Teacher_id:number,
// name:string


// }
// type intersection = Student & Teacher
// let obg:intersection = {

// Student_id:123,
// name1:"salman",
// Teacher_id:2233,
// name:"saman"


// }
// console.log(obg.Student_id,obg['name'])

// explict casting

// let myname:unknown = "asads"
// console.log((myname as string).length)
// console.log(<number> myname)


// Rest parameter

// function Rest(Firstname:string,...Lastname:string[]):string{
// return Firstname + "" + Lastname.join('')

// }

// Rest("tahami","asad","talah","saif","kamran")
// let employee = Rest("tahami" ," asad " ," talah " ,"saif" ,"kamran")
// console.log(employee)


// function void

// function V(id:string,full:string):void{
// console.log( id + full)


// }
// console.log(V("tihami","asad"))

// callback function

// function Mama(name:string){
// console.log("Inshall win " + name)

// }

// function Papa(fullname:string, call:(text:string) => void){

// call(fullname)


// }
// Papa("saima",Mama)


// Tupples

// let Tupple:[number,string,boolean] = [123,"Talha",true]
// console.log(Tupple)


// Hoisting
// console.log(err)
// var err = 20
// console.log(err)

// let 
// console.log(b)
// let b = 30;
// console.log(b)

// for loop

// let arr:string[] = ["talha","tahami","saquib","saman","salman","saifi"]
// console.log(arr)

// for(let i = 0; i<arr.length; i++){
// console.log(arr[i])


// }

// while loop

// let arr:number[] = [0,1,2,3,4,5,6]
// while (arr){
// console.log("Hello world" )

// }


// Array Methods
// let array:string[] = ["orange","grapes","ilaichi","watermelon","lemon"]
// array.push("chiness")
// array.unshift("1.annar")
// array.pop()
// array.shift()
// console.log(array)

let array:number[] = [1,2,3,4,5]
let result = 








