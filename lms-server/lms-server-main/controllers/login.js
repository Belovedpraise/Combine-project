const { User } = require("../models/userModel");

const { generateJwt } = require('../controllers/jwt');

const { handleError } = require('../prepared/handleError');

const bcrypt = require('bcrypt');

const login = async ( req, res ) => {
    let { email, password } = req.body;

    User.findOne( { email } ).select( '+password' ).exec( async ( err, result ) => {
        if ( err ) {
            
            handleError( res, err );
        } else if( result ) {
            
            const validatePassword = await bcrypt.compare( password, result.password );

            if (validatePassword) {
                const userJwt = generateJwt(result);

                res.json( { token: userJwt, isSuccess: true, email: result.email } );
                console.log("True")
            } else {
                console.log("False")

                res.json( { isSuccess: false, message: "Login Failed", isWrongPassword: true } );
            }
        } else {
                console.log("False")

            res.json( { isSuccess: false, message: "User does not exist", userNotExist: true } );
        }
    } );

}

module.exports = { login };