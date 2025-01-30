// import chalk from "chalk";
// import inquirer from "inquirer";
// let passW = 1122;
// const messa = await inquirer.prompt([
// {
//   name:"m",
//    type:"input",
//      message:"whats your name",
//       validate:function(value){
//       if(value.trim() !== ""){
//        return true
//       }
//        {
//          return "please enter fill the empty spaces"
//        }
//       }
// }
// ])
// console.log(messa.m)
// const messa1 = await inquirer.prompt([
// {
//   name:"m1",
//   type:"number",
//   message:"please enter the number ",
// }
// ]);
// console.log(messa1.m1)
// const pass = await inquirer.prompt([
// {
// name:"m2",
// type:"password",
// message:"please put the password",
// validate:function(value){
// if(value.trim() !== ""){
// return true;
// }
//  else{
//   return "please put the password"
//  }
// }
// }
// ])
// console.log(pass.m2)
// if(pass.m2 == passW){
// console.log(chalk.blueBright("Correct password"))
// }
// else{
// console.log("incorrect password")
// }
// const array = [
// {
// id: 0,
// name:"tahami",
// projects: 2,
// fullname:'s.m.tahami',
// fathername:"s.m.kashif",
// password: 112233
// },
// {
// id:1,
// name:"kashif",
// projects:4,
// fullname:"s.m.kashif",
// fathername:"s.m.hanif",
// password: 223344
// },
// {
// id:8,
// name:"mujtaba",
// projects:6,
// fullname:"s.m.mujtaba",
// fathername:"s.m.mujtaba",
// password:334455,
// }
// ]
// const filtering = await inquirer.prompt([
// {
// name:"f",
// type:"number",
// message:"please put the getting id"
// }
// ])
// console.log(filtering.f)
// const arrying = (id:number) => {
// return array.filter(obj => obj.id == id)
// }
// if(filtering == arrying){
//     console.log(arrying)
//     const result = arrying(8)
//     console.log(result)
// }
// const result = arrying(8)
//     console.log(result)
import chalk from "chalk";
import inquirer from "inquirer";
let balance = 12000;
const randome = Math.floor(10000 + Math.random() * 90000);
console.log(randome);
const answer = await inquirer.prompt([
    {
        name: "ans",
        type: "input",
        message: "put the name:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            {
                return 'please enter the name!';
            }
        }
    },
    {
        name: "courses",
        type: "rawlist",
        message: "please select the courses",
        choices: ['Ms office', 'Ms word', 'Typescript', 'javascript']
    }
]);
console.log(answer.ans);
const TutionFee = {
    "Ms office": 1500,
    "Ms word": 1000,
    "Typescript": 1200,
    "javascript": 10000
};
console.log(chalk.bgBlueBright(`\n TutionFee:${TutionFee[answer.courses]} `));
console.log(chalk.bgCyanBright(`\n Your balance is ${balance}`));
const Paymentmethod = await inquirer.prompt([
    {
        name: "pay",
        type: "list",
        message: "please choose the payment method",
        choices: ['Jazz cash', 'bank transfer', 'easy paisa']
    },
    {
        name: "transfer",
        type: "number",
        message: "please transfer the money"
    }
]);
console.log(Paymentmethod.pay);
if (Paymentmethod.pay === "Jazz cash") {
    console.log(chalk.greenBright(`Congratulations your ${chalk.blueBright("Jazz cash")} payment are Succesful`));
    balance >= Paymentmethod.transfer;
    balance -= Paymentmethod.transfer;
    console.log(chalk.blueBright(`your remaining balance is ${balance}`));
}
else if (Paymentmethod.pay === "bank transfer") {
    console.log(chalk.greenBright(`Congratulations your ${chalk.blueBright("Bank Transfer")} payment are Succesful`));
    balance >= Paymentmethod.transfer;
    balance -= Paymentmethod.transfer;
    console.log(chalk.blueBright(`your remaining balance is ${balance}`));
}
else if (Paymentmethod.pay === "easy paisa") {
    console.log(chalk.greenBright(`Congratulations your ${chalk.blueBright("easy paisa")} payment are Succesful`));
    balance >= Paymentmethod.transfer;
    balance -= Paymentmethod.transfer;
    console.log(chalk.blueBright(`your remaining balance is ${balance}`));
}
const TutionFees = TutionFee[answer.courses];
const payment = Paymentmethod.transfer;
if (TutionFees === payment) {
    console.log(chalk.greenBright(`Succesfully You are enroll now in this ${answer.courses}`));
}
else {
    console.log(chalk.bgBlueBright('you are not valid in this courses! '));
}
const review = await inquirer.prompt([
    {
        name: "rev",
        type: "list",
        message: "would you check the status",
        choices: ['Status', 'Exit']
    }
]);
console.log(review.rev);
