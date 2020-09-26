import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../form_style.css';
import Header from "./templates/Header";
import Footer from "./templates/Footer";
import axios from 'axios';
// import { useSelector, useDispatch } from "react-redux";

function LoginPage(props) {

  // const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const subdata = async () => {
    try {
      // console.log('here');
      // console.log('Email -> ' + email);
      // console.log('Password -> ' + password);

      await axios.post('/user/post/login', 
      { email, password }).then(props.history.push("/"));
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
                <h3>Sign In</h3>
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
                <center>New to Prototype?</center>
                <Link to="/register" className="button secondary text-center">
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

export default LoginPage;