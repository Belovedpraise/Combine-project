const handleError = ( req, res, err ) => {
    // res.json({status: false, message: "Error occurred. Please try again"});
    console.log(err)
}

module.exports = { handleError }