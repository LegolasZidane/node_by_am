const fs = require('fs');
//file where you want the data to go, the data.
fs.writeFileSync('notes.txt', 'This was from a synchronous function!');

fs.appendFileSync('notes.txt', ' First Challenge Completed, Alhamdulilah!!!!!');