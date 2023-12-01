require('dotenv').config();

module.exports = {
    dialect: process.env.BD,
    host: process.env.HOST,
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.TABLE,
    define: {
        timestamps: true,
        underscored: true,
    },
};