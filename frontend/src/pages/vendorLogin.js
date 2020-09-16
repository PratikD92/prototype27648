import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../form_style.css';
import Header from "./templates/Header";
import Footer from "./templates/Footer";
// import axios from 'axios';
// import { useSelector, useDispatch } from "react-redux";

function VendorLoginPage(props) {

  // const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const subdata = () => {
    try {
      console.log('here');
      console.log('Email -> ' + email);
      console.log('Password -> ' + password);

      // const d = await axios.get('/user/get/all');
      // console.log(d);
      // const { data } = await axios.post('/user/post/register', {
      //   name: name,
      //   email: email,
      //   password: password
      // });
    }
    catch (error) {
      console.log(error);
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
                <h3>Business Sign In</h3>
              </li>

              <li>
                <label>Email:</label>
                <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
              </li>

              <li>
                <label>Password:</label>
                <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
              </li>

              <li>
                <button type="submit" className="button primary">
                  <strong>Sign In</strong>
                </button>
              </li>

              <li>
                <center>Business not registered?</center>
                <Link to="/business-registration" className="button secondary text-center">
                  Create a new Account
              </Link>
              </li>
            </ul>
          </form>
        </div>
      </main>

      <Footer />

    </div>
  );
}

export default VendorLoginPage;