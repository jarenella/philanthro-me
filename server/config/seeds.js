const User = require("../models/User");

async function seedDB() {

    //seed users
    const user = await  User.create([
        { name: 'datkidd', password: "mypass1", email: "coolkid@email.com" }, 
        { name: 'banana', password: "GIGApassword", email: "banana@email.com" }
    ]);
    console.log(user + "\n-----------\nusers seeded\n-----------");
}

seedDB();