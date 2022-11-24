const { Courses } = require("../models/courses.model");


const cloudinary = require('cloudinary');

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET 
  });


const stageOneOfAddCourse = async(req, res)=> {
  const {courseName, courseCategory, courseDescription, signedInUser, coverImage} = req.body;

  Courses.findOne({"courseName" : courseName, "authorId": signedInUser}, (err, foundCourse)=> {
    if(err) {
      res.json({status: false, message: "Error occurred while adding course. Please try again", errorOccurred: true})
    }else {
      if(!foundCourse) {
        cloudinary.v2.uploader.upload(coverImage, (err, result)=> {
          if(err) {
            res.json({status: false, message: "Error occurred while adding course. Please try again", errorOccurred: true})
          }else{
            Courses.create( {courseName, courseCategory, courseDescription, authorId: signedInUser, coverImage: result.secure_url}, (err, response)=> {
              if(err) {
                console.log(err);
                res.json({status: false, message: "Error occurred while adding course. Please try again", errorOccurred: true})
              }else {
                console.log('Success');
                res.json({status: true, message: "Successful"})
              }
            })
          }
        })

      }else {
        console.log('Course exists');
       res.json({status: false, message: "You already have a course with the same name. Go back and edit", isExist: true})
      }
    }
  })

}

// module.exports = {stageOneOfAddCourse }
module.exports = {stageOneOfAddCourse}