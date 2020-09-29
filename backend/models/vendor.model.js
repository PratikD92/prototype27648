import mongoose from 'mongoose';

const vendorSchema = mongoose.Schema({

  // NAME
  // first_name: { type: String, required: true },
  // last_name: { type: String, required: true },

  // EMAIL PASSWORD
  // email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  // PERSONAL DETAILS
  // id: { type: String, required: true },
  // mobile: { type: Number, required: true },
  // address: { type: String, required: true },
  // aadhar_card: { type: String, required: true },
  // pan_card: { type: String, required: true },

  // ADMIN STATUS
  isAdmin: { type: Boolean, required: true, default: false },

  // BUSINESS DETAILS
  business_name: { type: String, required: true },
  business_image: { type: String, required: true},
  business_address: { type: String, required: true },
  // GSTIN: { type: String, required: true },
  // udyog_aadhar_card: { type: String, required: true },
  // company_pan_card: { type: String, required: true },
  // business_phone1: { type: Number, required: true },
  // business_phone2: { type: Number },
  // business_phone3: { type: Number },
  // subscription_fees_paid: { type: Boolean, required: true, default: false },
  meals_provided: [
    {
      meal: { type: String, required: true },
      price: { type: Number, required: true }
    }
  ],

  // Statistics
  registration_date: {type: Date, default: Date.now},
  // number_of_orders: { type: Number },
  trial_meal_requests: {type:Number},
  total_number_of_customers: { type: Number },
  // total_active_of_customers: { type: Number },
  serving_customer_ids: { type: Array, default: [] },
  // meal_wise_statistics: [{
  //   meal: { type: String, required: true },
  //   number_of_customers: { type: Number }
  // }],
  // trials_given: { type: Number },
  // current_month_earnings: { type: Number },
  // previous_month_earnings: { type: Number },
  // total_earnings: { type: Number },
  // notification: {type: String}
});

const vendorModel = mongoose.model("vendorSchema", vendorSchema);

export default vendorModel;