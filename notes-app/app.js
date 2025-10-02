// const fs = require('fs');
// //file where you want the data to go, the data.
// fs.writeFileSync('notes.txt', 'This was from a synchronous function!');

// fs.appendFileSync('notes.txt', ' First Challenge Completed, Alhamdulilah!!!!!');

// require('./utils.js');

// const name = 'Laraib';

// console.log(name);

// const name = require('./utils.js');

// console.log(name);

// const add = require('./utils.js');

// const sum = add(4, -2);

// console.log(sum);

// const getNotes = require('./notes.js');

// console.log(getNotes());

// const validator = require('validator');

// // console.log(validator.isEmail('laraibaa5@gmail.com'));

// console.log(validator.isURL('https://google.com'));

// const chalk = require("chalk");

// const success = chalk.green.bold.bgGreen;

// console.log(success("Success!"));

// console.log(process.argv);

const yargs = require("yargs");

// Create add command

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Title: " + argv.title + "\n" + "Body: " + argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log("Removing the note");
  },
});

yargs.command({
  command: "list",
  describe: "List your notes",
  handler: function () {
    console.log("Listing out all note/s");
  },
});

yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function () {
    console.log("Reading a note");
  },
});

yargs.parse();
