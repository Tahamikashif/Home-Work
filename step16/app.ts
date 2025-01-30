import inquirer from "inquirer"

const question = await inquirer.prompt([

{
name:"q",
type:"input",
message:"how are you"


}



])
console.log(question.q)

