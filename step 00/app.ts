import inquirer from "inquirer";
import chalk from "chalk";
const age:number = 20;
let myBalance = 300;

const id = [102030,203040,304050,405060,506070]

const arr = [];
 const random:number = Math.floor(10000 + Math.random() * 90000) 
 console.log(random)
const message = await inquirer.prompt([{

name:"m",
 type:"input",
  message:"whats your name",
   validate:function (value){
    if(value.trim() !== ""){
       return true;

    
    }

else{

 return "please enter valid name"

}

   }
},

{

name:"m1",
 type:"number",
  message:"please enter your age",

}





])
console.log(message.m);
arr.push(random)
arr.push(message.m)
console.log(arr)

if(message.m1 == age){

console.log("Your age is Correct!")

}

else{

console.log("your age is not correct")


}

const message1 = await inquirer.prompt([

{

 name:"m2",
  type:"password",
   message:"please enter your id"


},
])
console.log(message1.m2)

if(message1.m2 == random){

console.log(chalk.blueBright("Succesfully! ok Go enter the giaic"))

}

else{

console.log(chalk.greenBright("Not giaic student"))




}

const message2 = await inquirer.prompt([
{
name:"m3",
 type:"confirm",
  message:"Are you sure the giaic Canteen "
}
])
console.log(message2.m3)


if(message2.m3){

const message3 = await inquirer.prompt([

{

name:"m4",
 type:"list",
  message:"Enter the Food name",
    choices:["Lays","Kurkura","Fries","Boti Roll","chicken Roll"]

}
])
console.log(message3.m4)

const BillAmount:{[key:string]:number} = {

"Lays":20,
"Kurkura":30,
"Fries":40,
"Boti Roll":50,
"chicken Roll":60


}
console.log(`\n BillAmount:${BillAmount[message3.m4]}`)

const Billamou = BillAmount[message3.m4] 
if(Billamou){

    const message4 = await inquirer.prompt([

     {

     name:"m4",
      type:"number",
       message:"please put the amount"



     }
    ])
      console.log(message4.m4)
       if(myBalance >= Billamou){
          myBalance -= Billamou
          console.log(chalk.blueBright(`your remaining balance is ${myBalance}`))


       }

     else{

     console.log("Try again!")



     }


}

}
else if (message2.m3 = "false"){
const message5 = await inquirer.prompt([
{

 name:"m5",
  type:"number",
   message:"please enter your Roll number"




}

])
console.log(message5.m5)
arr.push(message5.m5)
console.log(arr)


if(message5.m5 = id){

    setTimeout(() => {console.log(`\n youre roll num = ${message1.m2} Correct!`)},2000)



}
else{

console.log("Not Correct")


}

}


setTimeout(() => {console.log(chalk.blueBright("Ok! This is Governer house student"))},3000)



















































































































































