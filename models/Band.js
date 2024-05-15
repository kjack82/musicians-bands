const {Sequelize, sequelize} = require('../db');

let Band = sequelize.define("band", {
    name: DataTypes.STRING,
    genre: DataTypes.STRING
})

module.exports = {
    Band
};