import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Footer from './templates/Footer';
import Header from './templates/Header';

function CheckoutPage(props) {
  const details = useSelector(state => state.checkoutDetails);
  const { checkoutDataState } = details;
  console.log(checkoutDataState);

  const services = checkoutDataState.servicesSubscribed;
  const total_price = checkoutDataState.totalPrice;
  const tiffin_name = checkoutDataState.tiffinName;
  return (
    <div className="grid-container">
      <Header />

      <div className="main">
        <h1>Subscribed :</h1>
        <table>
          {/* <tbody> */}

            <tr>
              <td>Tiffin wala</td>
              <td>{tiffin_name}</td>
            </tr>

            <tr>
              <td>Services</td>
              <td>{services}</td>
            </tr>

            <tr>
              <td>Total</td>
              <td>{total_price}</td>
            </tr>
          {/* </tbody> */}
        </table>

        <div className="payment-div">
          <button className="pay-button">
            Pay Now
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
