import mongoose from 'mongoose';

const customerSchema = mongoose.Schema({

  // NAME
  first_name: { type: String, required: true },
  // last_name: { type: String, required: true },

  // EMAIL PASSWORD
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  // ADMIN STATUS
  isAdmin: { type: Boolean, required: true, default: false }

  // PERSONAL DETAILS
  // mobile: { type: Number, required: true },
  // address: { type: String, required: true },
  // delivery_address: { type: String, required: true },
  // profession: { type: String, required: true },

  // // USING SERVICE DETAILS
  // id: { type: String, required: true },
  // trials: { type: Number },
  // last_trial: { type: Date },
  // number_of_orders: { type: Number },
  // meal_subscribed: { type: Number },
  // subscription_fees: { type: Number },
  // using_service: { type: Boolean, required: true, default: false },
  // serving_vendor_id: { type: String },
  // payment_done: { type: Boolean, default: false }

});

const customerModel = mongoose.model("customerSchema", customerSchema);

export default customerModel;