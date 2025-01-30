/*#! usr\bin\env node

import chalk from "chalk";
import inquirer from "inquirer";
let balance = 10000;
let Trans = 10
const RandomId = Math.floor(10000 * Math.random() + 9000)
console.log(RandomId)

const arr = []

const Question = await inquirer.prompt([

{
name:"q",
type:"input",
 message:"please put the name",
  validate:function(value){
if(value.trim() !== ""){
  
    return true;


}

else{

    return `please enter valid name restrictions`
   
   }



  }
  
},

])

console.log(Question.q)
arr.push(RandomId)
arr.push(Question.q)
console.log(arr)

let Adding = await inquirer.prompt([

{

 name:"a",
  type:"list",
   message:"please choose the product",
    choices:["Lays","fries","chips","Lemon Sandwich","Lemon Biscuit"]


},
])
console.log(Adding.a)
arr.push(Adding.a)
console.log(arr)

let ProductFee :{[key:string]:number} = {

"Lays":1200,
"fries":100,
"chips":1000,
"Lemon Sandwich":2000,
"Lemon Biscuit":3000


}


console.log(chalk.blueBright(`\n ProductFee:${ProductFee[Adding.a]}`))
console.log(chalk.greenBright(`\n Balance:${balance}`))

let PaymentMethod = await inquirer.prompt([

{

 name:"p",
  type:"list",
   message:"Please choose the PaymentMethod",
     choices:["Jazz Cash","Bank Transfer","Easy Paisa"]


},
 


])
console.log(PaymentMethod.p)

if( PaymentMethod.p === "Jazz Cash"){
let pay = await inquirer.prompt([
    {

        name:"q",
         type:"number",
          message:"Please put the Amount"
       
       
       
       
       
        }



])
console.log(pay.q)
if(balance >= pay.q){
    balance -= pay.q
    console.log(chalk.blackBright(`Your remaining balance is ${balance}`))
   
   
   
   }
   
   else{
   
   console.log("Try again")
   
   }
    
}




if(PaymentMethod.p === "Bank Transfer"){
let BankT = await inquirer.prompt([
{

  name:"b",
   type:"list",
    message:"Please put the transfer money",
     choices:["Manual","Default"]






},

{

    name:"q",
     type:"number",
      message:"Please put the Amount"
   
   
   
   
   
    }







])
console.log(BankT.q)



if(balance >= BankT.q ){
balance -= Trans
balance -= BankT.q
console.log(`Your remaining balance is ${balance}`)

}

else{

console.log("Insufficient Balance is!")


}


}


if(PaymentMethod.p === "Easy paisa"){

let Easy = await inquirer.prompt([

{
  name:"e",
   type:"number",
    message:"Please put the amount"




}
])
console.log(Easy.e)

if(balance >= Easy.e){

    balance -= Easy.e
     console.log(`Your Remaining balance is ${balance}`)



}

else{

console.log("Not Correct")


}



}

setTimeout(() => {console.log(chalk.greenBright("OK GO HOME"))},2000)


*/
// Syntax Error
// lett Message:string = "ahmed";
// console.log(Message)
let a = true;
console.log(a);
export default a;
