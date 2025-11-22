//?------------ password hashing example ------------

const crypto = require('crypto');
const password = 'mySecurePassword123!';



//? MD5 Hashing (Not recommended for secure applications)
// function hashPasswordMD5(password) {
//     const hash = crypto.createHash('md5');
//     hash.update(password);
//     return hash.digest('hex');
// }

// console.log("MD5 Hash:", hashPasswordMD5(password));

//? SHA-256 Hashing (Recommended for better security)

// function hashPasswordSHA256(password) {
//     const hash = crypto.createHash("sha256");
//     hash.update(password);
//     return hash.digest("hex");
// }

// console.log("SHA256 :-", hashPasswordSHA256(password));


//? SHA-512 Hashing (More secure than SHA-256)
// function hashPasswordSHA512(password) {
//     const hash = crypto.createHash('sha512');
//     hash.update(password);
//     return hash.digest('hex');
// }
// console.log("SHA-512 :-", hashPasswordSHA512(password));


//? PBKDF2 Hashing (Recommended for secure password storage)
function hashPasswordPBKDF2(password, salt) {
    const iterations = 100000;
    const keylen = 64;
    const digest = 'sha512';
    return crypto.pbkdf2Sync(password, salt, iterations, keylen, digest).toString('hex');
}

const salt = crypto.randomBytes(16).toString('hex');
console.log("PBKDF2 Hash :-", hashPasswordPBKDF2(password, salt));
