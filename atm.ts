import inquirer from "inquirer";
import chalk from "chalk";
import { type } from "os";
import CheckboxPrompt from "inquirer/lib/prompts/checkbox.js";
import chalkAnimation from "chalk-animation";
import { validateHeaderValue } from "http";


const sleep = ()=>{
    return new Promise((resolve) => { 
        setTimeout(resolve,2000);
    })
}

async function Molana() {

    console.log(chalk.redBright`
▄▄▄     ▄▄▄█████▓ ███▄ ▄███▓
▒████▄   ▓  ██▒ ▓▒▓██▒▀█▀ ██▒
▒██  ▀█▄ ▒ ▓██░ ▒░▓██    ▓██░
░██▄▄▄▄██░ ▓██▓ ░ ▒██    ▒██ 
▓█   ▓██▒ ▒██▒ ░ ▒██▒   ░██▒
▒▒   ▓▒█░ ▒ ░░   ░ ▒░   ░  ░
 ▒   ▒▒ ░   ░    ░  ░      ░
 ░   ▒    ░      ░      ░   
     ░  ░               ░
`)

interface UserInfo{
    pin : number,
    idCode : number,
    transaction : string,
    selectAmount : number,
    typeAmt : number
}
    
let UserInfo :{str : string}  = await inquirer.prompt([
    {
        name : "pin",
        message : "Enter your PinCode:  ",
        type : "input"
    },
    {
        name : "idCode",
        message: "Enter your idCode: ",
        type : "input"
    },
    {
        name : "transaction",
        message : "Please select your Transaction: ",
        choices : ["Fast Cash", "Withdrawl Cash"],
        type : "list",
        
    },
    {
        name : "selectAmount",
        message : "Please select your amount",
        choices : ["100","150","2000"],
        type : "list",
        when(answers){
            return answers.transaction == "Fast Cash" 
        }
    },
    {
        name : "typeAmt",
        message : "Type your Concerned Amount",
        type: "number",
        when(answers) {
            return answers.transaction == "Withdrawl Cash"
        },
    },
    {
        name : "Leaving",
        message : "Confirm if you are OUT",
        type : "confirm",
    },
    {
        name : "transDone",
        message : "Thank you for using Our ATM...",
        type: "checkbox",
        when(answers) {
            return answers.Leaving == CheckboxPrompt
        }
    }

])
}

Molana();