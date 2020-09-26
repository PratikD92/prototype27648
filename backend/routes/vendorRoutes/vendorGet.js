import express from 'express';
import vendorModel from '../../models/vendor.model';

const vendor_get_router = express();
vendor_get_router.use(express.json());

// FETCH ALL - ADMIN RIGHTS
vendor_get_router.get("/all", async (req, res) => {
  await vendorModel.find((err, user) => {
    if (err) {
      res.status(400).send("Something went wrong. Please try again...");
    }
    res.send(user);
  });
});

// FETCH AS PER AREA - USER RIGHTS
vendor_get_router.get('/:area', async (req, res) => {

  const vendorList = await vendorModel.find({
    business_address: req.params.area
  });
  if (vendorList.length > 0) {
    res.send(vendorList)
  }
  else {
    res.status(404).send({ msg: "No results found..." });
  }
});


// FETCH BY ID - FOR TIFFIN DETAILS
vendor_get_router.get("/details/:id", async (req, res) => {

  const tiffin = await vendorModel.find({
    _id: req.params.id
  });

  if (tiffin) {
    res.send(tiffin);
  }
  else {
    res.status(404).send({ msg: "Encountered some problem..." })
  }

});

export default vendor_get_router;