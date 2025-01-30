// Type Error
// let Message:string = "Ahmed";
// console.loger(Message)
// assignability error
// const Que:number = 12
// Que = 15
// console.log(Que)
// Strong Typing
// let Messa:string = "Asad";
// console.log(Messa)
// type Inference
// let e = "Pakistan";
// let b = "123";
// console.log(e+b)
// Module 
// import a from "./page.js"
// import {b} from "./page1.js"
// console.log(a + b)
// Import_Inquirer_Ecmascript_module
// import inquirer from "inquirer";
// const Messa = await inquirer.prompt([
// {
//  name:"age",
//   type:"number",
//    message:"Please put the age"
// }
// ])
// console.log(`Inshallah you will ${60 - Messa.age} 60 years old `)
// Union literals
// let Unin:string | number = "Taha";
// Unin = 123;
// console.log(Unin)
// object
// interface Car{
// name:string,
// type:string,
// message:string
// }
// let Cars:Car = {
// name:"Taha",
// type:"Human",
// message:"You are human"
// }
// console.log(Cars.name)
// console.log(Cars["message"])
// Anonymous
// let Anony:{name:string,exp:number } = {
// name:"zeeshan",
// exp:20 
// }
// console.log(Anony.name)
// console.log(Anony["exp"])
// Aliased Object Type
// type Book = {
// name:string,
// describe:string
// }
// let Books:Book = {
// name:"Essential Type",
// describe:"This is very useful book"
// }
// console.log(Books.name  +    Books.describe)
// Structural Type Object
// interface ball{
// dia:number
// }
// interface Sphere{
// diameter:number
// }
// let Ball:ball = {dia:12}
// let Sph:Sphere = {diameter:20}
// console.log(Ball)
// console.log(Sph)
// // Nested Object
// type Author = {
// name:string
// booK:string
// }
// type Book = {
// author:Author
// describe:string
// }
// let BooksInfo:Book = {
// author:{
// name:"Essential Typescript",
// booK:"This is very useful book "
// },
// describe:"Essential Typescript is used for web application"
// }
// console.log(BooksInfo.author)
// console.log(BooksInfo["describe"])
// // Intersection Types
// interface Student {
// name:string,
// class:number
// }
// interface Teacher {
// names:string,
// type:number
// }
// type Inter_sectiontype = Student & Teacher
// let obj:Inter_sectiontype = {
// name:"tahami",
// class:10,
// type:20,
// names:"asad"
// }
// console.log(obj)
// let Keys:unknown = "Asad"
// console.log((Keys as string))
// console.log(<string>Keys)
// Array 
// let Array:number[] = [1,30,3,4]
// console.log(Array[1])
// Function
// normal func or regular function
// function Add(Name:string,Age:number){
// return Name + Age
// }
// let Ads = Add("Tahami",12)
// console.log(Ads)
//  // Anonymous Function
//   function myadd (x:string,y:number): void  {
//  x + y
//  }
// console.log(myadd("taha",123))
// let Myadd = myadd(10,20)
//  console.log(Myadd)
// Arrow Function or Lambda function
// let Ar = (val:string) => {
// return val
// }
// Ar("120")
// let Ars = Ar("120")
// console.log(Ars)
// Rest Parameter
// function Rest(Names:string,...MulNames:string[]){
// return Names + "" + MulNames.join("")
// }
// console.log(Rest("taha"," tahami "," asad ","salman"))
// Tupples Strong type 
// let Tupples: [number,boolean,string] = [1,false,"tahami"]
// console.log(Tupples)
// Array Methods
// let Arrs:string[] = ["abuzar","slman","sakina","zubair","kulsum"]
// Arrs.push("Aslam")
// Arrs.pop()
// Arrs.unshift("-1")
// Arrs.shift()
// console.log(Arrs)
// Reduce Method Array
// let Arr:number[] = [1,2,3,4,5,5]
// let result = Arr.reduce((value,current) => value + current )
// console.log(result)
// let Arrss:number[] = [1,2,3,4,5,6,7,8,9,10,12]
// let result = Arrss.filter(num => num % 2 === 0)
// console.log(result)
// Slice method
// let Arrs:number[] = [1,2,3,4,5,6,7]
// let result = Arrs.slice(2,5)
// console.log(result)
// Map + reduce + Filter
// let arr:number[] = [1,2,3,4,5,6]
// let result = arr.filter(num => num % 2 === 0).map(num => num * 2).reduce((value,current) => value + current)
// console.log(result)
// Array method join
// let Arr:string[] = ["a","b","c"]
// let result = Arr.join("-!-")
// let res = Arr.join("--")
// console.log(result)
// console.log(res)
// Array Map Method
// let Arr:number[]= [1,2,3,4,5]
// let res = Arr.map(num => num * 2)
// console.log(res)
let Arr = [1, 2, 3, 4, 5];
for (let i = 0; i < Arr.length; i++) {
    console.log(Arr[i]);
}
export {};
// while(Arr){
// console.log("Hello")
// }
