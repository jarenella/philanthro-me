const db = require('./connection');
const User = require('../models/User');
const Category = require('../models/Category');

db.once('open', async () => {
    //seeds a user
    await User.create({
        name: 'Pamela',
        password: 'Washington',
        email: 'pamela@testmail.com'
    });
    //seeds a user
    await User.create({
        name: 'Elijah',
        password: 'Holt',
        email: 'eholt@testmail.com'
    });

    console.log('users seeded');

    //seeds a category
    await Category.create({
        name: 'Animals/Pets'
    })
    //seeds a category
    await Category.create({
        name: 'Shelters'
    })

    console.log('categories seeded');

    process.exit();
});