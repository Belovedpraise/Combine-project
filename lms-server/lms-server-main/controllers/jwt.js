const jwt = require('jsonwebtoken');

const generateJwt = userInfo => {
    let userJwt = jwt.sign({
        id: userInfo._id,
        email: userInfo.email
    }, process.env.key, { expiresIn: '10h', issuer: 'www.eduwise.com' });

    return userJwt;
}

module.exports = { generateJwt }