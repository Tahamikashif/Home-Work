import {input} from "@inquirer/prompts";
import {password} from "@inquirer/prompts";
import { number } from "@inquirer/prompts";
import inquirer from "inquirer";
let passwordss:string = '12345'


const inmessage = await input(
{
    
message:"whats your name",
}
)

console.log(inmessage)

const assing = await password ({
message:'whats your pass num',

})

if(assing === passwordss ){

console.log("correct password")



}else{

    console.log('not correct')
    
    
    }


const ages = {

firstage:await number({message:"whats your ages"}),

}
console.log(ages.firstage)


const choicess = await inquirer.prompt([
{
name:'ch',
type:"list",
choices:["12","13","14","15","16","17"],
message(answers) {
   console.log("please select the correct choice") 
},


}

])
console.log(choicess.ch)


if(choicess.ch ==  ages.firstage ){

console.log("correct age")



}
else{
console.log("not correct age")



}

const governer = await input({

message:'whats your governer name'



})
console.log(governer)

const student = await input({

 message:"whats your name from giaic student"



})

console.log(student)

const rollNo = await number({
message:'whats your rollno'


})
console.log(rollNo)

const time = await number({

message:"whats your timing",

})
console.log(time)

const day = await inquirer.prompt([
{
name:"days",
type:'list',
message(answers) {
    console.log("whats your day ")
},
choices:["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]

}
])

console.log(day.days)



console.log(("you are eligible for this course"))












