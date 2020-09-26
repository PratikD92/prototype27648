import express from 'express';
import customerModel from '../../models/customer.model';

const user_get_router = express();

// FETCH ALL (ADMIN RIGHTS)
user_get_router.get("/all", async (req, res) => {

  await customerModel.find((err, user) => {
    if (err) {
      res.status(400).send("Something went wrong. Please try again...");
    }
    res.send(user);
  });
});


export default user_get_router;