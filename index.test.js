const { sequelize } = require('./db');
const { Band, Musician, Song } = require('./index')

describe('Band, Musician, and Song Models', () => {

    beforeAll(async () => {   // sync method will create tables based on model class
        await sequelize.sync({ force: true });  // force true means tables re-created each time 
    })

    test('can create a Band', async () => {
        const band = await Band.create({ 
            name: 'Beatles',   // creating a band. ACT 
            genre: 'Rock'})  // 
        expect(band.name).toBe('Beatles');  //checking the band matches
        expect(band.genre).toBe('Rock');
        expect(band).toBeInstanceOf(Band);
    })

    test('can create a Musician', async () => {
        const musician = await Musician.create({ 
            name: 'Paul McCartney', 
            instrument: 'Guitar' })
        expect(musician.name).toBe('Paul McCartney');
        expect(musician.instrument).toBe('Guitar');
        expect(musician).toBeInstanceOf(Musician);
    })

    test('can update a Band', async () => {
        const band = await Band.create({ 
            name: 'The Beatles', 
            genre: 'Rock' })
        await band.update({
            name: "The Eagles",
        })
        expect(band.name).toBe('The Eagles')
    })

    test('can update a Musician', async () => {
        const musician = await Musician.create({ 
            name: 'Ringo Starr', 
            instrument: 'Drums'});
            expect(musician.name).toBe('Ringo Starr');
            await musician.update({
                name: "Noel Gallagher"
            })
            expect(musician.name).toBe("Noel Gallagher")
       
    })

    test('can delete a Band', async () => {
        const band = await Band.create({
            name: "Oasis",
            genre: "Rock"
        });
        expect(band.name).toBe('Oasis');
        expect(band.genre).toBe("Rock")
    
    await band.destroy();

    const deletedBand = await Band.findByPk(band.id)
    expect(deletedBand).toBeNull()
    })

})