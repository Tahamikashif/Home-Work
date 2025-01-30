"use strict";
/*let tupples:[number,string,boolean] = [6,"ali",true]
console.log(tupples)


// rest parameter


function restparameter(name:string, ...name1:string[]){
return name + "" + name1.join("")




}
 const parents = restparameter("taha", " tiham ", "samad")

 console.log(parents)


//callback function


function greeting(name4:string){
return name4



}
function walikum(name5:string,name4:string){
return name4 + name5



}

walikum("ali","taha")
const namesSS = walikum(" ali " , " taha ")
console.log(namesSS)
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// shift pop unshift push join map filter find
/*
let arr:number[] = [1,2,3,4];
const result = arr.map((number => number * 2))
console.log(result)


let array:number[] = [1,2,3,4,5,6,7,8,9,10];
const results = array.slice(1,7)
console.log(results)

const arrays = [1, 2, 3, 4, 5];
const resultss = arrays.filter(num => num % 2 === 0).map(num => num * 2).reduce((acc,current)=> acc + current, 0)

console.log(resultss);



const resultssss = [1,2,3,4,5]
const arrrays = [8,9,10]
const resultas = resultssss.concat(arrrays).join("_")
console.log(resultas)


*/
/*
let totalbalance = 10000;

let pincode = 123456;



import inquirer from "inquirer";

const ans = await inquirer.prompt([

{

name:'taah',
type:"number",
message(answers) {
    console.log("first number")
},




}




])

const pinmachine = await inquirer.prompt([



    {



  name:"pin",
  type:'list',
   message(answers) {
    console.log("second number")
},
         choices:["withdraw","fast cash"]




}
])


console.log(ans.taah)
console.log(pinmachine.pin)

if(ans.taah === pincode){

console.log("your number is correct")



}

else{

console.log("not correct number")


}

if(pinmachine.pin ===  "withdraw"){


    let withdraw = await inquirer.prompt([

{

name:"with1",
type:'number',
message(answers) {
    console.log("how do you withdraw your amount")
},


}

])

console.log(withdraw.with1)


if(totalbalance >= withdraw.with1){

totalbalance -= withdraw.with1

console.log(`your remaining balance is  ${totalbalance}`)


}
else{

console.log('you have not insufficient balance is')



}


}


else{
   
 let fastcash = await inquirer.prompt([
 {

name:"fast",
type:"list",
message(answers) {
    console.log("second number")
},
choices:["1000","2000","3000","4000","5000","10000"]



}






])
console.log(fastcash.fast)

if(totalbalance >= fastcash.fast){
totalbalance -= fastcash.fast

console.log(`your amount is ${totalbalance}`)


}

else{

console.log("you have isufficient balance is")


}
}
*/
// todo list
const inquirer_1 = __importDefault(require("inquirer"));
let todos = [];
let condition = true;
while (condition) {
    const question = await inquirer_1.default.prompt([
        {
            name: "q1",
            type: "checkbox",
            message(answers) {
                console.log("what do add todo list");
            },
        }
    ]);
    console.log(question.q1);
}
exports.default = todos;
