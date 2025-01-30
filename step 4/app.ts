/*

// inquirer


import inquirer from "inquirer";
import chalk, { Chalk } from "chalk";

let answer = await inquirer.prompt([


{
   name:'age',
   type:"number",
   message:"enter your age"



}

])
console.log( chalk.blue("inshallah you will " + (60 - answer.age) + "60 years  old " ))

*/

import { text } from "stream/consumers";

// anonymous
/*

let teacher :{name:string,experiance:number} = {

     name:"taha",
     experiance:10

}

console.log(teacher)


// aliased object type

  type student = {

name:string
address:number
house:string

  }

let Student:student = {

 name:"tahami",
 address:123,
 house:"white house"


}

console.log(Student)

interface manager  {

    name:string;
    type:Number;
    shopName:string




}

let storeManager:manager = {

name:"bilal",
type:1244,
shopName:"babalalal"




}

console.log(storeManager.name)
console.log(storeManager ["type"])

// structural typing object

interface ball {

diameter:string
radius:number


}

interface sphere {

diameter:string
length:number


}

let Ball:ball = {

diameter:"taha",
radius:12


}

let Sphere:sphere = {

  diameter:"13",
length:4

}
console.log(Ball["diameter"] )
console.log(Sphere)
console.log(Ball.radius)

// nested object

type samaa = {

firstName:string
lastName:string



}
 type samaad = {

  author:samaa
  name:string


 }


let Mybook:samaad ={
 author :{

firstName:"taha",
lastName:"syed"

 },

 name:"this is my book"


}

console.log(Mybook)

// intersaction type


interface ebook {

selling:string,
backup:string,



}
interface amazon {

    name_id:string
    rolling:string



}

type intersected_type = ebook & amazon; 

let obj1:intersected_type = {

selling:"excelent",
name_id:"brock lesnar",
rolling:"nice",
backup:"very perfect"



}

console.log(obj1)

// ecplicting cast

let message:unknown = "tahami"
console.log(<string>message)


// nested object

type poet = {

firstName:string,
lastName:string,


}

type Book = {

  author:poet,
  name:string


}

const mybook:Book = {

author:{

 firstName:"sir",
 lastName:"syed ahmed khan"



},

name:"which is the  great poet"

}
console.log(mybook)
*/

// intersection types
/*
interface Student  {

student_Id:string,
name:string


}

interface teacher {
teacher_Id:string,
password:number,


}
type intersected_type = Student & teacher ;
let obj1:intersected_type = {

student_Id:"Noman",
name:"abuz",
teacher_Id:"nice miss",
password:12345



}


console.log(obj1['student_Id'])
console.log(obj1.teacher_Id)
console.log(obj1.password)

// array

let fruits:string[] = ["banana","grapes","apple"]

fruits.unshift("water melon")
fruits.shift()
console.log(fruits)
fruits.pop()
fruits.sort()

//function
function add(x: number, y: number): number {
  return x+y 



}
add(3,5)
console.log(add)

// rest parameter function

function restParam(name:string,...name1:string[]){

return name + " " + name1.join("")

}

const rest = restParam ("taha","saman" ,"salman" ,"jabbar")

console.log(rest)// async


function delay(milliseconds:number):Promise<void> {
return new Promise((resolve) => {
setTimeout(() => {

resolve();

}, milliseconds)


})

}
 delay(1000)
.then(() => {
console.log("i want to serve")
})
delay(5000)
.catch((error) => {

console.log("I donot to serve " ,error)


})

.finally(() => {

console.log("i only serve")


})

*/



let assing_names:string[] = ["maaz","safder","shaz","safer" ]

assing_names.unshift("saba")
for(let i=2; i<assing_names.length; i++){

console.log(assing_names[i])



}
// class

class A {
  name:string;
  constructor(theName: string, age:number) { 
      this.name = theName; 
      console.log("A constrcutor");
  }
}
class B extends A {

}
let a: A = new A("A",4); // This is working as expected
let b: B = new B("C",8); // This is working too as child class use parents constructor
  


// Case 2:
// If parent class does not provide constructor and child class provide constrcutor then 
// child class must call super() within child's class constructor
class C {
}
class D extends C {
  name:string;
  constructor(theName: string,age:number) {
      super();
      this.name = theName; 
      console.log("D constrcutor");
       
  }
}
let aa: C = new C(); // This is working as expected
let cc: D = new D("C",8); // This is working as expected


// Case 3:
// If parent class and child class both provide constructor 
// then child class must call super with same parameters as 
// they are in parent's constructor call to super
class E {
  name:string;
  constructor(theName: string,age:number) { 
      this.name = theName; 
      console.log("E constrcutor");
  }
  displayName():void {
      console.log("Name = " + this.name);
  }
}



// static properties


class Myclass {

   static x = 4;
   static printX(){

   console.log(Myclass.x)



   }




}
Myclass.printX()


class MyStudent {

  static y = 10;
  static printY(){

   console.log(MyStudent.y)



  }




}

MyStudent.printY()




// pulling nested object

// object mn array bana kar usay dosra object mn get karo

let developers = {

language:["javascript","typescript","python"],
tools:["react","angular","vue"],
framework:["git",'webpack',"docker"]


};


let {language,tools,framework} = developers


console.log(`${language[1]} , ${tools[2]}, ${framework[1]}`)


// dynamic object


function dynamicobject(name:string,name2:number) {
  let object:any = {}

  object[name] = name2

  return object
}

console.log(dynamicobject("theme",3))


let numberss:number[] = [1,2,3,4,5,6]

let doublenumbers = numberss.map((numberss) => numberss * 2)


console.log(doublenumbers)



function averageScore(sum:number,...scores:number[]){

let totalscore = scores.reduce((sum,scores) => sum + scores ,0)
return totalscore / scores.length


}
console.log(averageScore(20,30,40))


enum vehcaltype {

car,
truck,
bus,



}





console.log(vehcaltype.car)

let arraystring = [1,"banana",2,"apple",3,"grapes"]

let arraymixed = arraystring.filter((item) => typeof item === "number" )

console.log(arraymixed)


function adders(order:number,order1:string){

return order  +   order1



}

let order = adders( 4, " you serve order")
console.log(order)





















































































































































