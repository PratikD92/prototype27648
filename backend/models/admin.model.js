import mongoose from 'mogoose';

const adminSchema = mongoose.Schema({
  name: {type: String,required: true},
  email: {type: String,required: true,unique: true},
  username: {type: String,required: true},
  password: {type: String,required: true},
  isAdmin: {type: Boolean,required: true,default: false},
  notification_to_vendor: {type: String,required: true},
  notification_to_customer: {type: String,required: true},
  vendor_subscription_fee: {type: Number,required: true}
});

const adminModel = mongoose.model("adminSchema", adminSchema);

export default adminModel;