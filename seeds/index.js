const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '660015061121694824d7d0da',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!',
            price,
            images: [
                {
                   
                    url: 'https://res.cloudinary.com/dbeqvl5kb/image/upload/v1711368455/YelpCamp/odhl0zzppu9bkvyla25j.jpg',
                    filename: 'YelpCamp/odhl0zzppu9bkvyla25j',
                  },
                  {
                    url: 'https://res.cloudinary.com/dbeqvl5kb/image/upload/v1711368456/YelpCamp/mvgnzmwk1e2mzglzfff9.jpg',
                    filename: 'YelpCamp/mvgnzmwk1e2mzglzfff9',
                  },
                  {
                    url: 'https://res.cloudinary.com/dbeqvl5kb/image/upload/v1711368458/YelpCamp/svrx9hur0krn6bb6xinm.jpg',
                    filename: 'YelpCamp/svrx9hur0krn6bb6xinm',
                  },
                  {
                    url: 'https://res.cloudinary.com/dbeqvl5kb/image/upload/v1711368458/YelpCamp/piaf2ulcti9swqm07fbw.jpg',
                    filename: 'YelpCamp/piaf2ulcti9swqm07fbw',
                  }
                
            ]
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})