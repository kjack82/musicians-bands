const { Band } = require('./models/Band')
const { Musician } = require('./models/Musician')
const { Song } = require("./models/Song")
// Define associations here
Band.hasMany(Musician)
Musician.belongsTo(Band)

Song.belongsTo(Band)
Band.hasMany(Song)

module.exports = {
    Band,
    Musician,
    Song
};
