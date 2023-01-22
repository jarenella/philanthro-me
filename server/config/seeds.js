const db = require('./connection');
const User = require('../models/User');
const Category = require('../models/Category');
const NonProfit = require('../models/NonProfit');
const Order = require('../models/Order');

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
        nonProfitId: '800119414'
    })
    //seeds a non-profit
    await NonProfit.create({
        name: 'Smiles For Freedom',
        amount: 24,
        nonProfitId: '384015114'
    })
    //seeds a non-profit
    await NonProfit.create({
        name: 'Candida Library Foundation',
        amount: 32,
        nonProfitId: '452567288'
    })
    //seeds a non-profit
    await NonProfit.create({
        name: 'Candid Canine Inc',
        description: 'Finding dogs the FOREVER home of their dreams..',
        amount: 16,
        nonProfitId: '841763073'
    })
    
    console.log('Non Profits seeded')

    //order seeds below

    //create an order with empty array
    
    // const newOrder = await Order.findOne({});
    //array of all nonprofits saved in our DB is set to the nonProfits variable
    // const nonProfits = await NonProfit.findOne({ test: 'test' });
    //for every nonprofit in this array, we take its id and add it to the Order we created in the DB
    // let nonProfitIDs = [];
    // for (i=0; i<nonProfits.length; i++) {
    //     newOrder.nonProfits.push(nonProfits[i]._id);
    //     newOrder.save();
    // }

    // console.log("first log " + newOrder._id);
    // console.log("second log " + nonProfits._id);
    // newOrder.nonProfits.push(nonProfits._id);
    // newOrder.save();


    
    
    console.log("orders seeded");

    process.exit();
});