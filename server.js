const fs = require("fs");
const chalk = require("chalk");
const validator = require("validator");
const yargs = require("yargs");

/*const {userDetails, friendName} = require('./utils')



fs.writeFileSync("userData.txt", "This content is written by arjun !!!  ")  // create if not exist 


fs.appendFileSync("userData.txt", "This data is saved by jayaseelan via append method")  // create file if not exist


const message = "Your notes saved successfully ..!"

console.log(chalk.green.inverse(message))


console.log(validator.isEmail('jayaseelangmail.com'))

console.log(userDetails.age) */

//console.log(process.argv)

//console.log(yargs.argv)

yargs.command({
  command: "add",
  describe: "To add new notes..!",
  builder: {
    title: {
      describe: "This is note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function () {
    console.log("notes added success");
  },
});

yargs.parse();
