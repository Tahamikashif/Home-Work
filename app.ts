import inquirer from "inquirer";
import { SocketAddress } from "net";

const answer = await inquirer.prompt([
    {message:"inter first name", type:"string",name:"first name"},
    {message:"inter second name",type:"string",name:"second name"},
    {

       message:"great job",
       type:"list",
       name:"string",
       address:{
              area:"string",
              country:"string",
              concno:"number",
              zipcode:"number",

       },
      

       

    },



]);
console.log(answer);


if (answer.string === "string"){
console.log(answer.firstname - answer.secondname )


}else("THE end");