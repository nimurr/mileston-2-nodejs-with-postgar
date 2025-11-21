const fs = require('fs');

const content1 = 'Hello, this is the first line.\n Node.js is awesome!\n';

try {
    fs.writeFileSync('./data/note.txt', content1, 'utf-8');
    console.log('File written successfully.');
} catch (error) {
    console.error('Error writing file:', error.message);
}


const content2 = '\nAppending a new line to the existing file.\n Let\'s learn more about Node.js!\n';


fs.appendFile('./data/note.txt', content2, 'utf-8', (err) => {
    if (err) {
        console.error('Error appending to file:', err.message);
        return;
    }
    console.log('File appended successfully.');
}); 

console.log('End of write-file.js');