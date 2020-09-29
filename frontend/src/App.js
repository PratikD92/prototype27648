import React from 'react';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ShowAllCustomers from './pages/ShowAllCustomerPage';
import RegistrationPage from './pages/RegistrationPage';
import TestPage from './pages/TestPage';
import VendorLoginPage from './pages/vendorLogin';
import VendorRegistrationPage from './pages/vendorRegistration';
import ShowAllVendorsPage from './pages/ShowAllVendorsPage';
import SearchResultPage from './pages/SearchResultPage';
import TiffinDetailsPage from './pages/TiffinDetailsPage';
import CheckoutPage from './pages/CheckoutPage';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/login" exact={true} component={LoginPage} />
      <Route path="/register" exact={true} component={RegistrationPage} />
      <Route path="/allcustomers" exact={true} component={ShowAllCustomers} />

      {/* VENDOR */}
      <Route path="/business-login" component={VendorLoginPage} />
      <Route path="/business-registration" component={VendorRegistrationPage} />
      <Route path="/allvendors" component={ShowAllVendorsPage} />
      <Route path="/search-tiffins" component={SearchResultPage} />
      <Route path="/tiffin-details/:id" component={TiffinDetailsPage} />
      <Route path="/user-checkout" component={CheckoutPage} />

      <Route path="/test" exact={true} component={TestPage} />

    </BrowserRouter>
  );
}

export default App;
