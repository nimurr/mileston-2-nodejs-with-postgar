
const fs = require('fs');

console.log("Start Reading ....")

fs.readFile('./data/diary.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err.message);
        return;
    }
    console.log(data);
});
console.log('End Reading....')