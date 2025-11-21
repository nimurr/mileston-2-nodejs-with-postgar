// append file 

const fs = require('fs');

const content = '\nAppending a new line to the existing file.\n Let\'s learn more about Node.js!\n';

fs.appendFileSync('./data/note.txt', content, 'utf-8');

fs.appendFile('./data/note.txt', content, 'utf-8', (err) => {
    if (err) {
        console.error('Error appending to file:', err.message);
        return;
    }
    console.log('File appended successfully.');
});


console.log('File appended successfully using appendFileSync.');
