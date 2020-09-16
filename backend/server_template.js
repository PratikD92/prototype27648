// import express from 'express';
// import data from './data';

// const app = express();
// app.use(express.json());

// app.get("/tiffins", (req, res) => {

//   const queries = req.query;
//   const keys = [];
//   for (var k in queries) keys.push(k);
//   // res.send(queries);

//   if (keys.length === 0) {
//     res.send(data.tiffin_services);
//   }
//   else {
//     // const keys = [];
//     // for (var k in queries) keys.push(k);
//     for (var k in keys) {
//       const key = keys[k];
//       const value = queries[key];
//       const output = [];
//       if (key === "lessthan") {
//         output = data.tiffin_services.filter(t => t.price < value);
//       }
//       res.send(output);
//     }
//   }
// });

// app.post("/addtiffin", (req, res) => {
//   const _id = data.tiffin_services.length + 1;
//   const tiffinService = {
//     id: _id,
//     name: req.body.name,
//     email: req.body.email,
//     locality: req.body.locality,
//     price: req.body.price
//   };

//   // Adding to the data
//   data.tiffin_services.push(tiffinService);

//   res.send(req.body.name + "added Successfully..")
// });

// // As per request
// app.get("/tiffins/:id", (req, res) => {

//   const localTiffins = data.tiffin_services.filter(t => t.id === parseInt(req.params.id));

//   res.send(localTiffins);

// });




// app.listen(5000, console.log('Listening to port 5000...'));