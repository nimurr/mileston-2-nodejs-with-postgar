const path = require('path');
const dirPath = path.join(__dirname, 'data', 'files', 'documents');
console.log('Directory Path:', dirPath);

const filePath = path.join(dirPath, 'example.txt');
console.log('File Path:', filePath);