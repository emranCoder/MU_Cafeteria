const express = require('express');
var cors = require('cors')
const path = require('path');
const db = require('./config/db');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const staffAuthRoutes = require('./routes/staffAuth');
const coupon = require('./routes/Coupon');
const message = require('./routes/Message');
const loginRoutes = require('./routes/login');
const productRoutes = require('./routes/product');
const categoryRoutes = require('./routes/Category');
const orderRoutes = require('./routes/Order');
const verifyRoutes = require('./routes/Verify');
const newsRoutes = require('./routes/News');

const { errorHandler, notFoundError } = require('./middleware/error_handler');



const app = express()
dotenv.config();
const options = {
    origin: `${process.env.ROOT}${process.env.CLIENT_PORT}`,
    methods: ["POST", "GET", "PUT", "DELETE"],
    allowedHeaders: '*',
    optionsSuccessStatus: 200
}




app.use('/avatar', express.static(path.join(__dirname, '/public/uploads/avatars')));
app.use('/products/img', express.static(path.join(__dirname, '/public/uploads/products')));
app.use('/news/img', express.static(path.join(__dirname, '/public/uploads/news')));
app.use('/staff/img', express.static(path.join(__dirname, '/public/uploads/staffs')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(options));
app.use('/api/auth', authRoutes);
app.use('/api/coupon', coupon);
app.use('/api/message', message);
app.use('/api/staff/auth', staffAuthRoutes);
app.use('/api/login', loginRoutes);
app.use('/api/product', productRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/verify', verifyRoutes);
app.use('/api/news', newsRoutes);




app.use(notFoundError);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.ROOT}${process.env.PORT}`);
    db();
});
