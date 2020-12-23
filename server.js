const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')
const connectDB = require("./config/db");
connectDB();
const userRoute = require('./routes/user');
const productRoute = require('./routes/product');
app.use(bodyParser.json());
app.use(cors());
app.use('/api/users',userRoute);
app.use('/api/products',productRoute);
app.listen(5000,()=>console.log('Server started at 5000'));