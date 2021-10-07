const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('backosb', 'root', 'root', { //db, name, pass
    host: 'localhost',
    dialect: 'mysql', //type de database ex: postgresql, mysql2, mariadb, sqlite
    dialectOptions: {
        timezone:'local'
    },
    logging: false
});

const connect = async () => { // connection à la DB
    try {
        const options = { force: false, logging: false };
        await sequelize.authenticate();
        await sequelize.sync(options);
    } catch (err) {
        console.log(err);
    }
};

const close = async () => {
    try {
        await sequelize.close();
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    connect, close, sequelize
};