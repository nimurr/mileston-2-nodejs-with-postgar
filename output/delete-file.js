// delete file using fs module
const fs = require('fs');

// fs.appendFileSync('./data/note.txt', '\nThis is an additional line before deletion.\n', 'utf-8');

// fs.unlink('./data/note.txt', (err) => {
//     if (err) {
//         console.error('Error deleting file:', err.message);
//         return;
//     }
//     console.log('File deleted successfully.');
// });


if (fs.existsSync('./data/note.txt')) {
    fs.unlinkSync('./data/note.txt');
    console.log('File deleted successfully using unlinkSync.');
} else {
    console.log('File does not exist.');
}