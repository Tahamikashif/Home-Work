let atmAccount:number = 42101123;
let atm:number[] = [];
let currentB:number = 20000;

import inquirer from "inquirer";



const atmAcc = await inquirer.prompt([
{

     name:"pin",
     type:"number",
     message:"put your current num!",


}


])
console.log(atmAcc.pin)

if(atmAcc.pin ==  atmAccount){

console.log("your are correct")


}
else{

  console.log('your atm number is not correct')

};

if(atmAcc.pin == atmAccount){

let checkacc = await inquirer.prompt([

{
    name:"pin1",
    type:"confirm",
    message:"what do you want to draw ",
    
}
])
console.log(checkacc.pin)
};






























































