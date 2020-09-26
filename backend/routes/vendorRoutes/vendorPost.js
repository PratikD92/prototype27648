import express from 'express';
import bcrypt from 'bcryptjs';
import vendorModel from '../../models/vendor.model';
import { registrationValidation } from '../../validations/vendorDataValidation';
import multer from 'multer';

// -----------------------------------------------------------------
// REGISTRATION
// -----------------------------------------------------------------

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb(null, __dirname + '../../../uploads');
    cb(null, __dirname + '../../../../frontend/public/images/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  }
});

const vendor_post_router = express();
vendor_post_router.use(express.json());

vendor_post_router.post("/register", upload.single('business_image'), async (req, res) => {

  const meals = JSON.parse(req.body.meals);

  // check validation
  // const { error } = registrationValidation(req.body);
  // if (error) return res.status(400).send(error.details[0].message);

  // checking if email exists
  const emailExists = await vendorModel.findOne({ business_name: req.body.business_name });
  if (emailExists) return res.status(400).send('Email already exists...');

  // hashing the password before storing
  const password = req.body.password;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Registering uploaded file path relative to how it would seem to frontend
  const filepath = (req.file.path).split('/public')[1]

  
  // if validation passed, then take input as per customer DB model

  const vendor = new vendorModel({
    business_name: req.body.business_name,
    business_address: req.body.business_address,
    business_image: filepath,
    meals_provided: meals,
    password: hashedPassword
  });

  // Insert into DB
  try {
    const savedVendor = await vendor.save();
    res.send(savedVendor);
  } catch (error) {
    res.status(400).send(error);
  }

});


// -----------------------------------------------------------------
// LOGIN
// -----------------------------------------------------------------

export default vendor_post_router;