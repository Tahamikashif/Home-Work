import inquirer from "inquirer";
import chalk from 'chalk';
let balance = 12000;
const arr = [];
const Randome_number = 10000 + Math.floor(Math.random() * 90000);
console.log(Randome_number);
const Ans = await inquirer.prompt([
    {
        name: "a",
        type: "input",
        message: "please Enter Your Name",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter your name";
        }
    }
]);
arr.push(Ans.a);
console.log(arr);
let Courses = await inquirer.prompt([
    {
        name: "cour",
        type: "rawlist",
        message: "please select your Courses",
        choices: ['Nextjs', 'TailwindCss', 'Html', 'Css', 'typescript', 'javascipt']
    },
]);
console.log(chalk.blueBright(Courses.cour));
const CourseFee = {
    'Nextjs': 1200,
    'TailwindCss': 1500,
    'Html': 1800,
    'Css': 2000,
    'typescript': 2500,
    'javascipt': 3000
};
console.log(chalk.blueBright(`\n CourseFee:${CourseFee[Courses.cour]}`));
console.log(`\n Balance:${balance}`);
const Amount = await inquirer.prompt([
    {
        name: "am",
        type: "number",
        message: "please enter your amount",
    }
]);
console.log(Amount.am);
if (balance >= Amount.am) {
    balance -= Amount.am;
    console.log(chalk.greenBright(`your remaining balance is ${balance}`));
}
else {
    console.log('try again');
}
let Coursesbalance = CourseFee[Courses.cour];
const Amounts = Amount.am;
if (Coursesbalance === Amounts) {
    console.log(chalk.blueBright(`Succesfully! you are enroll now in this ${CourseFee[Courses.cour]} courses`));
}
else {
    console.log("try again");
}
const Exist = await inquirer.prompt([
    {
        name: "ex",
        type: "list",
        message: "please choose the view",
        choices: ['Status', 'Exist']
    }
]);
console.log(Exist.ex);
if (Exist.ex === "Status") {
    console.log(chalk.greenBright(`\n ID:${Randome_number}`));
    console.log(chalk.blueBright(`\n Name:${Ans.a}`));
    console.log(chalk.greenBright(`\n Courses:${Courses.cour}`));
    console.log(chalk.blueBright(`\n CourseFee:${CourseFee[Courses.cour]}`));
    console.log(chalk.greenBright(`\n Amount:${Amount.am}`));
    setTimeout(() => { console.log(chalk.greenBright("your remaining balance")), 2000; });
}
else if (Exist.ex === "Exist") {
    setTimeout(() => { console.log(chalk.greenBright(`Ok Go Home`)); }, 1000);
}
