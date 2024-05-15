const {Sequelize, sequelize} = require('../db');

let Musician = sequelize.define ("musician", {
    name: DataTypes.STRING,
    instrument: DataTypes.STRING
})

module.exports = {
    Musician
};