if (process.env.PROD) {
    require('dotenv').config();
}

const jwt = require('jsonwebtoken');

const { User } = require('../models/userModel');

const { handleError } = require('../prepared/handleError');

const key = process.env.KEY;

const authenticateUser = (req, res, next) => {
    let getHeaders = req.headers['authorization'];
    if (getHeaders) {
        let extractToken = getHeaders.split(" ");
        let getToken = extractToken[1];

        try {
            jwt.verify(getToken,key,(err,result)=>{
                if(err) {
                    console.log(err)
                    res.json({status: false, message: "You are not logged in", notLoggedIn: true})
                }else{
                    req.body.signedInUser = result.id;
                    next();
                }
            })
        } catch (err) {
            
            console.log(err)

        }
    }
}

module.exports = { authenticateUser }
