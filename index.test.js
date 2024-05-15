const { sequelize } = require('./db');
const { Band, Musician, Song } = require('./index')

describe('Band, Musician, and Song Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        const testUser = await Band.create({ name: 'Beatles', genre: 'rock'})
        expect(testUser.name).toBe('Beatles');
    })

    test('can create a Musician', async () => {
        const testUser = await Musician.create ({name: 'George', instrument: 'clapping'})
        expect(testUser.name).toBe('George');
    })

    test('can update a Band', async () => {
        const testUser = await Band.create({ name: 'Beatles', genre: 'rock'});
        await testUser.update ({ genre: 'Metal'})
        expect(testUser.genre).toBe('Metal');
    })

    test('can update a Musician', async () => {
        const testUser = await Musician.create({ name: 'George', instrument: 'clapping'});
        await testUser.update({name: 'Micah'})
        expect(testUser.update).toBe('Micah');
    })

    test('can delete a Band', async () => {
        const testUser = await Band.create ({ name: 'Beatles', genre: 'rock'})
        await testUser.destroy();
        const deleted = await Band.findByPk(testUser.id)
        expect(deleted).toBeNull();
    })

    test('can delete a Musician', async () => {
        const testUser = await Musician.create({ name:'George', instrument: 'clapping'});
        await testUser.destroy()
        const deleted = await Musician.findByPk(testUser.id);
        expect(deleted).toBeNull()
    })
})