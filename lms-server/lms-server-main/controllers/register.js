const { User } = require('../models/userModel');

const { generateJwt } = require('../controllers/jwt');

const newUser = async (req, res)=> {
    let {firstName, lastName, email, mobileNumber, userName, password} = req.body;

    const existedUser = await User.findOne( {"email": email} );

    // console.log(req.body)
    if (!existedUser) {
        await User.create( { firstname:firstName, lastname:lastName, email, mobilenumber:mobileNumber, username:userName, password }, (err, result)=> {

            if (err) console.log(err);

            const userJwt = generateJwt(result);

            res.json( {success: true, token: userJwt, message: "Registreation successful"} );
        });
    }else {
        res.json( { userExist: true, message: "User already exist with the same email" } );
    }
}

module.exports = { newUser };