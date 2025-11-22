require('dotenv').config();

const config = {
    appName: process.env.APP_NAME || 'DefaultApp',
    appVersion: process.env.APP_VERSION || '1.0.0',
    port: process.env.PORT || 3000,
    mode: process.env.MODE_ENV || 'development'

};

console.log(config)