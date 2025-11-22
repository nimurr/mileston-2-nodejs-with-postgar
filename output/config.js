require('dotenv').config();

const config = {
    appName: process.env.APP_NAME,
    appVersion: process.env.APP_VERSION,
    port: process.env.PORT || 3000,
    mode: process.env.MODE_ENV || 'development'

};

console.log(config)


module.exports = config;