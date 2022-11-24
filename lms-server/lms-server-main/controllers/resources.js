const { Resources } = require("../models/resources.model");
const {Courses} = require('../models/courses.model')


const cloudinary = require('cloudinary');

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET 
  });

const stageTwoOfAddResources = async(req, res)=>{
    const {resourcesName, resourcesFile, signedInUser} = req.body;
    // console.log(resourcesFile);

    Resources.findOne({"resourceName": resourcesName},(err, foundResources)=>{
        if (err) {
            res.json({status: false, message: "Error occurred While adding resources. Please try again", errorOccurred: true})

        }else{
            if(!foundResources){
                cloudinary.v2.uploader.upload(resourcesFile,{timeout: 120000,resource_type:"auto",folder:"Easy Learning"},(err,result)=>{
                    if(err){
                        console.log(err);
                        res.json({status: false, message: "Error occurred while adding resources. Please try again", errorOccurred: true})

                    }else{
                        Courses.find({"authorId": signedInUser}, (err, courses)=> {
                            const courseId = courses[courses.length - 1]._id;
                            Resources.create( {resourceName: resourcesName, file: result.secure_url, courseId, courseDuration: result.duration, resourceType: result.resource_type}, (err, response)=>{
                                if (err) {
                                    console.log(err);
                                    res.json({status: false, message: "Error occurred while adding resources. Please try again", errorOccurred: true})
                                    
                                }else {
                                    console.log('Success');
                                    res.json({status: true, message: "Successful"})
                                }
                            })
                            })
                    }
                    
                })
            }
            else {
                console.log('Resource exists');
                res.json({status: false, message: "You already have a resource with the same name. Go back and edit", isExists: true})
            }
        }
    })
}

const getCourseResources = (req, res) => {
    Resources.find({"courseId": req.body.id}, (err, result)=> {
        if(err) {
            console.log(err)
            res.json({status: false, message: "An unexpected error occurred. Please try again"});
        }else {
            // console.log(result)
            res.json({status: true, resources: result})
        }
    })
}
module.exports = { stageTwoOfAddResources, getCourseResources}


