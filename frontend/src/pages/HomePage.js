import React, { useState } from "react";
// import { Link } from 'react-router-dom';
import Footer from "./templates/Footer";
import Header from "./templates/Header";
import { useDispatch } from "react-redux";
import { MainSearchAction } from "../actions/userActions";
// import { MainSearchAction } from "../actions/userActions";

function HomePage(props) {
  const [area, setArea] = useState('');
  const dispatch = useDispatch();

  const submitHandler = () => {
    dispatch(MainSearchAction(area));
    props.history.push("/search-tiffins")
  };

  return (
    
    <div className="grid-container-home">

      <Header />

      <main className="main">
        <div className="search-main">
          <input type="text" id="area" name="area" onChange={(e) => setArea(e.target.value)}/>
          <button onClick={submitHandler}>SEARCH</button>
        </div>
      </main>

      <Footer />

    </div>
  );
}

export default HomePage