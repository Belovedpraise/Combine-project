if (process.env.NODE_ENV!='production') {
    require('dotenv').config();
}

const mongoose = require( 'mongoose' );

const uri = process.env.URI;

let connection = () => {
    mongoose.connect(uri, 
        {
            useNewUrlParser: true,

            useUnifiedTopology: true,
    })
}

if (connection) {
    console.log("connected");
}else {
    console.log("Error connecting to the database");
}


module.exports = { connection };