const express = require('express');
const app = express();
const cors = require('cors');
const {connection} = require('./prepared/connection') 
connection();
const { newUser } = require('./controllers/register');

const { login } = require('./controllers/login');

const { course } = require('./controllers/course');

const {stageOneOfAddCourse} = require('./controllers/course')

const { authenticateUser } = require('./middleware/middleware');

const {getSignedInUser} = require('./controllers/getSignedUser');

const {getMyCourses} = require('./controllers/view-course');

const {getCoursesByCategories} = require('./controllers/getCourses')

const {getAllCourses} = require('./controllers/getCourses');

const {addToCart} = require('./controllers/add-to-cart')

const {getItemsFromCart,deleteFromCart} = require('./controllers/add-to-cart')

const {stageTwoOfAddResources} = require('./controllers/resources');

const {stageThreeOfAddPrice} = require('./controllers/price');

const {editCourseDetails} = require('./controllers/editCourse');

const {getCourseResources} = require('./controllers/resources');

const {editCourseResources} = require('./controllers/editCourse');

const {editPrice} = require('./controllers/editCourse')


// const {connection} = require("./prepared/connection")
// connection()


// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({limit: '100mb', extended: true}))
// app.use(express.json());
app.use(express.urlencoded({extended:true,limit:'100mb'}));
app.use(express.json({limit: '100mb'}))
app.use(cors());

const PORT = process.env.PORT || 3487;

app.use("/api/user/", authenticateUser)

app.get('/api/getConnection', )


app.post("/api/account/register", newUser);

app.post("/api/account/login", login);

app.post("/api/user/courses/stage-one", stageOneOfAddCourse);

app.post("/api/user/resources/stage-two", stageTwoOfAddResources);

app.post("/api/user/courses/stage-three", stageThreeOfAddPrice);

app.post('/api/user/view-my-courses', getMyCourses);

app.post('/api/user/get-courses-by-category', getCoursesByCategories)

app.post('/api/user/get-all-courses', getAllCourses)

app.post('/api/user/add-to-cart', addToCart)

app.post('/api/user/get-items-from-cart', getItemsFromCart);

app.post('/api/user/delete-from-cart', deleteFromCart);
// app.post('/user/delete',deleteCart)

app.post('/api/user/edit-course-details', editCourseDetails);

app.post('/api/user/get-course-resources', getCourseResources)

app.post('/api/user/get-user', getSignedInUser);

app.post('/api/user/edit-resource-details', editCourseResources)

app.post('/api/user/edit-course-price', editPrice);





app.listen(PORT, ()=> {
    console.log(`server is listening on port ${PORT}`);
})

