import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../form_style.css';
import axios from 'axios';
import Header from "./templates/Header";
import Footer from "./templates/Footer";
// import { useSelector, useDispatch } from "react-redux";

function RegistrationPage(props) {

  const [firstName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const subdata = async () => {
    try {

      await axios.post('/user/post/register',
        { firstName, email, password }).then(props.history.push("/"));

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
                <h3>Register</h3>
              </li>

              <li>
                <label>Name:</label>
                <input type="name" name="name" id="name" onChange={(e) => setName(e.target.value)} />
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
                  <strong>Register</strong>
                </button>
              </li>

              <li>
                <center>Already have an Account? &nbsp;
                <Link to="/login" className="button secondary text-center">
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

export default RegistrationPage;