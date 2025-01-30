import inquirer from "inquirer";
import chalk from "chalk";
let yourBal = 1000;
console.log(chalk.yellow("GOOD MORNING"))
const message = await inquirer.prompt([

{

name:"messa",
type:"input",
message(answers) {
    console.log("how are you")
},

}

])
console.log(message.messa)

const message1 = await inquirer.prompt([
{

    name:"messa1",
      type:"rawlist",
         message(message1) {
           console.log("please select how to purchase")
},
             choices:["eggs","bread","butter","snacks","milk"],
                default:true
}

])
console.log(message1.messa1)

const message2 = await inquirer.prompt([
{
   name:"messa2",
    type:"number",
      message(answers) {
          console.log("please put the Quantity")
      },

}


])
console.log(message2.messa2)


const message3 = await inquirer.prompt([

{
name:"messa3",
   type:"select",
    message(answers) {
      console.log("check the back product prc annd select it")
 },
  choices:["100",'200','300','400','500','600','700','120',"150","180","220","250","270","290"]

}
])

console.log(message3.messa3)

if(yourBal >= message3.messa3){
   yourBal -= message3.messa3
    console.log(`your remaining balane is ${yourBal}`)
     console.log(chalk.blue("THANKS FOR PURCHASING"))
}

else{

    console.log('Insufficient balance is')

}














































