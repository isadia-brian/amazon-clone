const dotenv = require("dotenv");

dotenv.config();

exports.SENDER_EMAIL = process.env.SENDER_EMAIL;
exports.SENDER_APP_PASSWORD = process.env.SENDER_APP_PASSWORD;
exports.MONGODB_URI = process.env.MONGODB_URI;
