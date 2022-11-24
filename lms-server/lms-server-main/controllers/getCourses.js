const { response } = require('express');
const {Courses} = require('../models/courses.model')
const {Resources} = require('../models/resources.model')
const {Price} = require('../models/price.model')


const getCoursesByCategories = (req, res)=> {
    const {name} = req.body;
    Courses.find({"courseCategory": name}, (err, courses)=> {
        if(err) {
            console.log(err);
            res.json({status: false, message: 'Please reload this page'})
        }else{
            if(courses < 0) {
                console.log('Not found');
                res.json({status: false, message: 'No course found'})
            }else {
                console.log(courses)
                res.json({status: true, courses})
            }
        }
    })
}

const getAllCourses = async (req, res) => {
    let courses = await Courses.find();
    let resources = await Resources.find();
    let prices = await Price.find();

    // resources.map(())
    res.json({status: true, courses, resources, prices})

}

module.exports = {getCoursesByCategories, getAllCourses}


    // if(err) {
        //     console.log(err);
        //     res.json({status: false, message: 'Please reload this page'})
        // }else{
        //     if(allCourses < 0) {
        //         res.json({status: false, message: 'No course found'})
        //     }else {
        //         res.json({status: true, allCourses})
        //     }
        // }