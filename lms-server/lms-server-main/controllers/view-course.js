const {Courses} = require('../models/courses.model')

const getMyCourses = (req, res)=> {
    const {signedInUser} = req.body;

    Courses.find({"authorId": signedInUser}, (err, myCourses)=> {
        if(err) {
            res.json({status: false, message: 'Please reload this page'})
        }else {
            if(myCourses <0) {
                res.json({status: false, message: 'No course found'})
            }else {
                // console.log(myCourses)
                res.json({status: true, myCourses})
            }
        }
    })
}

module.exports = {getMyCourses}