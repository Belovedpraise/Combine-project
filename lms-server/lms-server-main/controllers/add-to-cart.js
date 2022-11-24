const {Cart} = require('../models/addToCart.model');
const {Courses} = require('../models/courses.model')


const addToCart = (req, res)=>{
    const {_id, signedInUser, courseName, coverImage, free_paid} = req.body;
    console.log(req.body);
    Cart.create({courseId: _id, userId: signedInUser, courseName, coverImage,free_paid}, (err, response)=> {
        if(err) {
            console.log(err);
            res.json({status: false, message: "Error occurred"})
        }else {
            console.log(response)
            console.log({status: true, message: "Added"});
        }
    })
}

const getItemsFromCart =(req, res)=> {
    const {signedInUser} = req.body;
    Cart.find({"userId": signedInUser}, (err, cart)=> {
        if(err) {
            res.json({status: false, message: 'Error occurred while fetching your courses. Please try again'})
        }else {
            if(cart <0) {
                res.json({status: true, message: "Cart is empty"})
            }else {
                let courseArray = cart.forEach(carts => {
                    Courses.findOne({_id: carts.courseId}, (err, response) => {
                        const newArr = [];
                        newArr.push(response)
                        return newArr;
                    })
                });
                res.json({status: true, cart, courseArray})
            }
        }
    })
}


const deleteFromCart = (req, res) => {
    // console.log(req.body)
    console.log("done")
    Cart.deleteOne({_id:req.body._id}, (err, result) => {
        if(err){
            console.log("could not delete")
            res.json({status: false, message: "Could not delete from cart. Please try again"})
            // res.send("thou deletest not")
        }else{
            console.log(result)
            // res.send("thou hath deleted")
            res.json({status: true, result})
        }
    })
    
}

module.exports = {addToCart, getItemsFromCart, deleteFromCart}
