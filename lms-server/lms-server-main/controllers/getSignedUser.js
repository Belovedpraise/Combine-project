const { User } = require("../models/userModel");


const getSignedInUser = (req, res) => {
    const id = req.body.signedInUser;

    User.findOne({"_id": id}, (err, user)=> {
        if(err) {
            res.json({status: false, message: "Please reload this page"})
        }else {
          res.json({status: true, user})
        }
    })
}

module.exports = {getSignedInUser};