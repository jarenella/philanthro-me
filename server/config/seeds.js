const db = require('./connection');
const User = require('../models/User');
const Category = require('../models/Category');
const NonProfit = require('../models/NonProfit');

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

    console.log('Users seeded');

   /* add for future!
    //seeds a category
    await Category.create({
        name: 'Animals/Pets'
    })
    //seeds a category
    await Category.create({
        name: 'Shelters'
    })
    //seeds a category
    await Category.create({
        name: 'Supports Marginalized Groups'
    })

    console.log('Categories seeded');

    //seeds a non-profit
    await NonProfit.create({
        name: 'Alliance for Smiles International',
        amount: 50,
        orgsId: '800119414'
    })
    //seeds a non-profit
    await NonProfit.create({
        name: 'Smiles For Freedom',
        amount: 24,
        orgsId: '384015114'
    })
    //seeds a non-profit
    await NonProfit.create({
        name: 'Candida Library Foundation',
        amount: 32,
        orgsId: '452567288'
    })
    //seeds a non-profit
    await NonProfit.create({
        name: 'Candid Canine Inc',
        description: 'Finding dogs the FOREVER home of their dreams..',
        amount: 16,
        orgsId: '841763073'
    })
    
    console.log('Non Profits seeded')
    
   */
    console.log('categories seeded');

    process.exit();
});