/*
import chalk from "chalk";
import inquirer from "inquirer";
let pass = 123456;
let nic = 2233;
let name = "tahami";
let balance = 12000;

const message1 = await inquirer.prompt([
{

name:"m",
  type:"input",
     message:"please put the name"

}
])
console.log(message1.m)

if(message1.m === name){

      console.log(chalk.blueBright("Correct name"))
}
else{
console.log(chalk.greenBright("Not correct nmae"))
}

const message2 = await inquirer.prompt([
{
name:"m2",
type:"password",
message:"please put the own password"
}
])
console.log(message2.m2)
if(message2.m2 == pass){

console.log(chalk.blueBright("Correct pass"))


}
else{

console.log(chalk.greenBright('not correc pass'))

}

const message3 = await inquirer.prompt([

{

name:"m3",
  type:"rawlist",
    message:"please choose the product name",
      choices:['soap',"surf","rice","wheat"]
}
])
console.log(message3.m3)

const message4 = await inquirer.prompt([
{
name:"m4",
   type:"input",
     message:"please put the product name"  
}
])
console.log(message4.m4)

if(message4.m4 === message3.m3){

console.log(message4.m4)

}

else{

console.log("not correct shosing")


}
const message5 = await inquirer.prompt([
{

name:"m5",
type:"list",
message:"please choose the selected product amount",
choices:['Withdraw',"Fast cash"]
}
])
console.log(message5.m5)

if(message5.m5 === "Withdraw"){
const message6 = await inquirer.prompt([
{
name:"m6",
type:"number",
message:"whats your amount put here"
}
])
console.log(message6.m6)
if(balance >= message6.m6){
balance -= message6.m6
console.log(chalk.greenBright(`your remaining balance is ${balance}`))

}
else{

console.log("not enough balance")


}

}

else if(message5.m5 === "Fast cash"){

const message7 = await inquirer.prompt([
{

name:'m7',
type:"number",
message:"please choose the fast amount here!",
choices:["1000",'120','150','180','190','200','260','290','300','400','480','10']
}
])
console.log(message7.m7)
if(balance >= message7.m7){
    balance -= message7.m7
    console.log(chalk.blackBright(`your remaining balance is ${balance}`))
    
    }
    else{
    
    console.log(chalk.blueBright("not enough balance"))
    
    
    }




}


setTimeout(() => {console.log(chalk.blueBright("THe End"))},6000)

*/


/*
import chalk from "chalk";
import inquirer from "inquirer"
let condition = true



while (condition){
let randomnumber = Math.floor(Math.random() *10+1);
let balance = 200;

const guess_number = await inquirer.prompt([
{
name:"user",
 type:"input",
  message:"please guess a number between 1-10"
},
{
  name:"g",
  type:'number',
  message:'whats your tryng the number guessing game'
  }
])
console.log(guess_number.user)


if(guess_number.user == randomnumber){
console.log(chalk.blueBright("Congratulation"))
console.log(chalk.greenBright(balance -= guess_number.g))
console.log(chalk.greenBright(`your remaining balnance is ${balance}`))
}
else{

  console.log(chalk.blueBright(`Try again? your remaining balance is ${balance -= guess_number.g}`))



}
const message = await inquirer.prompt([
  {
  name:"m",
    type:"confirm",
      message:"more number guessing !"
  }
  ])
  console.log(message.m )
  condition = message.m



}
  */


import inquirer from "inquirer";
import chalk from "chalk";
import { number } from "@inquirer/prompts";

const Raandomnumber:number = Math.floor(10000 + Math.random() * 90000)
let myBalance:number = 12000;
const Question = await inquirer.prompt([
{
name:"q",
 type:"input",
   message:"Enter Your Name:",
    validate:function (value){
      if(value.trim() !== ""){
          return true;
          
      }
       else{
        return `please enter the valid name!`


       }

    },

     },
     {
        name:"courses",
         type:"list",
          message:"please select the course and inroll now",
           choices:['MS.OFFICE',"JAVASCRIPT","TYPESCRIPT","HTML","PYTHON"]


     }

]);

const tutionFee:{[key:string]:number} = {

"MS.OFFICE":2000,
"JAVASCRIPT":1000,
"TYPESCRIPT":4000,
"HTML":1500,
"PYTHON":3000,
};

console.log(chalk.blueBright(`\n TutionFee:${tutionFee[Question.courses]}`));

console.log(chalk.blueBright(`\n your balance is: ${myBalance}`));

const paymentmethod = await inquirer.prompt([
  {
  name:"payment",
   type:"rawlist",
     message:"please select the payment transfer",
      choices:["Bank Transfer","Easy Paisa","Jazz Cash"]
  
  },
  
  {
     name:"amount",
      type:"number",
       message:"please put the amount",
          }
  
  ]);
  console.log(chalk.greenBright(`you select payment method ${paymentmethod.payment}`))

let TutionFee = tutionFee[Question.courses]
let PaymentAmount = parseFloat(paymentmethod.amount)

if(TutionFee === PaymentAmount){
console.log(chalk.blueBright(`Congratulations! you are enroll now in ${Question.courses} courses`))

const AnsView = await inquirer.prompt([

{
name:"v",
 type:"list",
   message:"pleae select the view",
    choices:['View Status','Exit']


}
])
console.log(AnsView.v)
if(AnsView.v == "View Status"){
console.log(chalk.greenBright(`Student Name:${Question.q}`))
console.log(chalk.greenBright(`Student Balance:${myBalance === PaymentAmount}`))
console.log(chalk.blueBright(`Student ID:${Raandomnumber}`))
console.log(chalk.greenBright(`Student Course:${Question.courses}`))
console.log(chalk.blueBright(`Tution Fee Paid:${paymentmethod.amount}`))

}
}
else{

console.log(chalk.greenBright('Try again'))

}

setTimeout(() => {

console.log(chalk.blueBright("Ok Go Home"))},5000)

