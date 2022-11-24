const {Courses} = require('../models/courses.model');
const {Resources} = require('../models/resources.model');
const {Price} = require('../models/price.model');

const cloudinary = require('cloudinary');
const { response } = require('express');

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET 
  });


const editCourseDetails =(req, res) => {
    let {id, name, description, coverImage, signedInUser} = req.body;
    Courses.findOne({id}, (err, result)=> {
        if (err) {
            console.log(err)
        } else {
            let newCourseDetails = {courseName: name, courseCategory: result.courseCategory, courseDescription: description, authorId: signedInUser, coverImage}
            Courses.findByIdAndUpdate(id, newCourseDetails, (err, response)=> {
                if(err) {
                    console.log(err)
                    res.json({status: false, message: "Error occurred while editing resource. Please try again", errorOccurred: true})

                }else{
                    console.log("Success")
                    res.json({status: true, message: "Successful"})

                }
            })
        }
    })
}

const editCourseResources = (req, res) => {
    let {id, name, file} = req.body;
    Resources.findOne({id}, (err, resource)=> {
        if(err) {
            console.log(err)
        }else {
            cloudinary.v2.uploader.upload(file,{timeout: 120000,resource_type:"auto",folder:"Easy Learning"},(err, result)=>{
                if(err){
                    console.log(err);
                    res.json({status: false, message: "Error occurred while editing resource. Please try again", errorOccurred: true})

                }else{
                    const resourceDetails = {resourceName: name, file: result.secure_url, courseId: resource.courseId, courseDuration: result.duration, resourceType: result.resource_type}
                    Resources.findByIdAndUpdate(id, resourceDetails, (err, response)=> {
                        if(err) {
                            console.log(err);
                            res.json({status: false, message: "Error occurred while editing resource. Please try again", errorOccurred: true})

                        }else {
                            console.log("Success")
                            res.json({status: true, message: "Successful"})

                        }
                    })    
                }
            })
        }
    })
}

const editPrice =(req, res)=> {
    let {id, price} = req.body;
    let newPriceDetails = {price, courseId: id};
    Price.findByIdAndUpdate(id, newPriceDetails, (err, response)=> {
        if(err) {
            console.log(err)
            res.json({status: false, message: "Error occurred while editing resource. Please try again", errorOccurred: true})

        }else{
            console.log("Success")
            res.json({status: true, message: "Successful"})

        }
    })
}


module.exports = {editCourseDetails, editCourseResources, editPrice}
