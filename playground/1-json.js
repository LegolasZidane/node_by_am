const fs = require("fs");
// const book = {
//   title: "Desire for the Aakhirah",
//   author: "Maulana Ashraf Ali Thanwi RAH",
// };

// const bookJSON = JSON.stringify(book);
// // console.log(bookJSON);

// // const parsedData = JSON.parse(bookJSON);
// // console.log(parsedData);

// fs.writeFileSync("1-json.json", bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);

// console.log(data);

//Challenge
const dataBuffer = fs.readFileSync('2-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

data.name = "Laraib";
data.age = 26;

const updatedData = JSON.stringify(data);
fs.writeFileSync('2-json.json', updatedData);