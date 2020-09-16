import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../form_style.css';
import axios from 'axios';
import Header from "./templates/Header";
import Footer from "./templates/Footer";

// import { useSelector, useDispatch } from "react-redux";



function VendorRegistrationPage(props) {

  const [business_name, setName] = useState('');
  const [business_address, setAddress] = useState('');
  const [business_image, setImage] = useState('');
  const [password, setPassword] = useState('');
  const [breakfast, setBreakfast] = useState('');
  const [breakfast_price, setBreakfastPrice] = useState('');
  const [lunch, setLunch] = useState('');
  const [lunch_price, setLunchPrice] = useState('');

  const subdata = async () => {
    try {
      // console.log(business_image);
      // console.log('Submitted')
      const meals = [
        {
          meal: breakfast,
          price: parseInt(breakfast_price)
        },
        {
          meal: lunch,
          price: parseInt(lunch_price)
        }
      ]

      // const fd = new FormData([{
      //   'business_name': business_name,
      // }]);
      const fd = new FormData();
      fd.append('business_name', business_name);
      fd.append('business_image', business_image);
      fd.append('business_address', business_address);
      fd.append('meals', JSON.stringify(meals));
      fd.append('password', password);
      // console.log(fd)
      // await axios.post('/vendor/post/register',
      //   { business_name, business_address, meals, password, fd })
      //   .then(props.history.push("/"));
      // console.log(meals);
      await axios.post('/vendor/post/register', fd)
      .then(props.history.push("/"));

    } catch (error) {
      console.log({ msg: error.message });
    }
  };

  return (
    <div className="grid-container">

      <Header />

      <main className="main">
        <div className="form">
          <form onSubmit={subdata}>
            <ul className="form-container">
              <li>
                <h3>Business Register</h3>
              </li>

              <li>
                <label>Business Name:</label>
                <input type="business_name" required={false} name="business_name" id="business_name" onChange={(e) => setName(e.target.value)} />
              </li>

              <li>
                <label>Locality:</label>
                <input type="business_address" required={false} name="business_address" id="business_address" onChange={(e) => setAddress(e.target.value)} />
              </li>

              <li>
                <label>Image:</label>
                <input type="file" required={false} name="business_image" id="business_image" onChange={(e) => setImage(e.target.files[0])} />
              </li>

              <li>
                <input type="breakfast" defaultValue="Breakfast" name="breakfast" id="breakfast" onChange={(e) => setBreakfast(e.target.value)} />
                <input type="breakfast_price" defaultValue="2500" name="breakfast_price" id="breakfast_price" onChange={(e) => setBreakfastPrice(e.target.value)} />
              </li>

              <li>
                <input type="lunch" defaultValue="Lunch" name="lunch" id="lunch" onChange={(e) => setLunch(e.target.value)} />
                <input type="lunch_price" defaultValue="3500" name="lunch_price" id="lunch_price" onChange={(e) => setLunchPrice(e.target.value)} />
              </li>

              <li>
                <label>Password:</label>
                <input type="password" required={false} name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
              </li>

              <li>
                <button type="submit" className="button primary">
                  <strong>Register</strong>
                </button>
              </li>

              <li>
                <center>Already have a Business Account? &nbsp;
                <Link to="/business-login" className="button secondary text-center">
                    Signin
              </Link></center>
              </li>
            </ul>
          </form>
        </div>
      </main>

      <Footer />

    </div>
  );
}

export default VendorRegistrationPage;