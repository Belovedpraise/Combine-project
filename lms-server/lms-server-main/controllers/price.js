const {Price} = require('../models/price.model');
const {Courses} = require('../models/price.model')


const stageThreeOfAddPrice = async(req, res)=>{
    const {free_paid, signedInUser} = req.body;

    if (err) {
        console.log(err)
        res.json({status: false, message: "Error occured while adding Amoount", errorOccured: true})
    }else {
        Courses.find({"authorId" : signedInUser}, (err, courses)=> {
            const courseId = courses[courses.length - 1]._id;

            Price.create({free_paid, courseId}, (err, response)=>{
                if (err) {
                    console.log(err);
                    res.json({status: false, massage: "Error occured while adding amount. please try again", errorOccurred: true})
                }else {
                    console.log('Success');
                    res.json({status: true, message: "Successfully Added"})
                }
            })
        })


    }

    

}
module.exports = { stageThreeOfAddPrice}