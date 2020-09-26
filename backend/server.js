import express from 'express';
import user_get_router from './routes/userRoutes/userGet';
import user_post_router from './routes/userRoutes/userPost';
import vendor_get_router from './routes/vendorRoutes/vendorGet';
import vendor_post_router from './routes/vendorRoutes/vendorPost';
import dotenv from "dotenv";
import mongoose from "mongoose";

// Router from expressJS
const app = express();

// MIDDLEWARES
dotenv.config();
app.use(express.json());
// app.use('/uploads', express.static('uploads'));
app.use('../frontend/public/images/', express.static('images'));

// user routes
app.use('/user/get', user_get_router);
app.use('/user/post', user_post_router);

// vendor routes
app.use('/vendor/get', vendor_get_router);
app.use('/vendor/post', vendor_post_router);

// CONNECTING TO DB
try {
  mongoose.connect(
    process.env.MONGODB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
    () => console.log("Connected to DB..\n"));
} catch (error) {
  console.log(error.message);

}

app.listen(5000, console.log('Listening to port 5000...'));