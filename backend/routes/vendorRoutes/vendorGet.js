import express from 'express';
import vendorModel from '../../models/vendor.model';

const vendor_get_router = express();
vendor_get_router.use(express.json());

vendor_get_router.get("/all", async (req, res) => {
  await vendorModel.find((err, user) => {
    if (err) {
      res.status(400).send("Something went wrong. Please try again...");
    }
    res.send(user);
  });
});

vendor_get_router.get('/:area', async (req, res) => {

  const vendorList = await vendorModel.find({
    business_address: req.params.area});
  if(vendorList.length > 0){
    res.send(vendorList)
  }
  else {
      res.status(404).send({msg: "No results found..."});
    }
  });

export default vendor_get_router;