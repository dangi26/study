const fs = require('fs');
fs.writeFileSync('note.txt', 'hello,');     //create a text file 

fs.appendFileSync('note.txt', ' how r u');   //add text in the text file