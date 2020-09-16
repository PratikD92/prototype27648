import express from 'express';
import { registrationValidation, loginValidation } from '../../validations/userDataValidation';
import customerModel from '../../models/customer.model';
import bcrypt from 'bcryptjs';
// import cors from 'cors';

const user_post_router = express();
user_post_router.use(express.json());
// user_post_router.use(cors());

//================================================================= 
// USER REGISTRATION
//================================================================= 
user_post_router.post("/register", async (req, res) => {

  // check validation
  const { error } = registrationValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // checking if email exists
  const emailExists = await customerModel.findOne({ email: req.body.email });
  if (emailExists) return res.status(400).send('Email already exists...');

  // hashing the password before storing
  const password = req.body.password;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // if validation passed, then take input as per customer DB model
  const customer = new customerModel({
    first_name: req.body.firstName,
    email: req.body.email,
    password: hashedPassword,
  });

  // Insert into DB
  try {
    const savedCustomer = await customer.save();
    res.send(savedCustomer);
  } catch (error) {
    res.status(400).send(error);
  }

});

//================================================================= 
// USER LOGIN
//================================================================= 

user_post_router.post("/login", async (req, res) => {

  // check validation
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // checking if email exists
  const customer = await customerModel.findOne({ email: req.body.email });
  if (!customer) return res.status(400).send('Email does not exists...');

  // comparing password
  const validPassword = await bcrypt.compare(req.body.password, customer.password);
  if (!validPassword) return res.status(400).send('Invalid Password...');

  console.log("Logged in successfully...")
  res.send("Logged in successfully...")


});

export default user_post_router;