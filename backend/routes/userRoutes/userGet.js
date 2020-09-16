import express from 'express';
import customerModel from '../../models/customer.model';

const user_get_router = express();
// user_get_router.use(express.json());

user_get_router.get("/all", (req, res) => {

  customerModel.find((err, user) => {
    if (err) {
      res.status(400).send("Something went wrong. Please try again...");
    }
    res.send(user);
  });
});

export default user_get_router;