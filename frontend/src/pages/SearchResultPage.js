import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Header from './templates/Header';
import Footer from './templates/Footer';
import "../search_result.css";
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import "../modal_style.css";
import { CheckoutAction } from '../actions/userActions';

function SearchResultPage(props) {

  const dispatch = useDispatch()
  Modal.setAppElement("#root");

  // Opening modal using state
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [bname, setBname] = useState('');
  const [bimage, setBimage] = useState('');
  const [blocality, setBLocality] = useState('');
  const [bmeals, setBmeals] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [servicesSubscribed, setServicesSubscribed] = useState('');

  const vendorsList = useSelector(state => state.searchedVendors);
  const { searchedVendorsList, loading, error } = vendorsList;
  console.log(searchedVendorsList);

  const handleCheckout = () => {
    const data = {
      servicesSubscribed: servicesSubscribed.slice(0, servicesSubscribed.length - 3),
      totalPrice: totalPrice,
      tiffinName: bname
    }
    dispatch(CheckoutAction(data)).then(props.history.push("/user-checkout"))
  };


  const check_change = (meal, e) => {
    const checked = e.target.checked;
    const service = meal.meal;
    if (checked) {
      setServicesSubscribed(servicesSubscribed + service + ' + ');
      setTotalPrice(totalPrice + meal.price);
    }
    else {
      setServicesSubscribed(servicesSubscribed.replace(service + " + ", ''));
      setTotalPrice(totalPrice - meal.price);
    }
  };

  const modalFunction = (t) => {
    setModalIsOpen(true);
    setBname(t.business_name);
    setBimage(t.business_image);
    setBLocality(t.business_address);
    setBmeals(t.meals_provided);
  };

  const modalCloseFunction = () => {
    setModalIsOpen(false);
    setTotalPrice(0);
    setServicesSubscribed('');
  }

  return (

    <div className="grid-container">
      <Header />
      <main className="main">

        {/* **************************************************** */}
        {/* MODAL CODE */}
        {/* **************************************************** */}

        <Modal isOpen={modalIsOpen} className='modal-body'>

          <div className="modal-heading">
            {bname}
          </div>

          <div className="modal-main">

            <div className="modal-image-div">
              <img src={bimage} className="modal-image" alt='PRODUCT' />
            </div>

            <div className="modal-details">
              <ul>
                <li className="flex-heading">
                  {blocality}
                </li>

                <li>
                  <div className='meals-div'>
                    <p>Meals:</p>
                    <table>
                      <tbody>
                        {bmeals.map(function (i) {
                          return <tr>
                            <td><input type="checkbox" id="priceCheckbox" onChange={(e) => check_change(i, e)} /></td>
                            <td>{i['meal']}</td>
                            <td><strong>
                              : ₹{i['price']}
                            </strong>
                            </td>
                          </tr>;
                        })}
                        <tr className="modal-total-price">
                          <td></td>
                          <td></td>
                          <td>₹{totalPrice}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </li>
                <li>
                  <button className="checkout-button" onClick={() => handleCheckout()}>
                    Checkout
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="second-row">
            <div className="modal-tiffin-description">
              <p className="description-title">Description:</p>
              <p>Lorem ipsum dolor sit amet</p>
            </div>

            <div className='modal-trial'>
              <p>I wish to take a trial meal..</p>
            </div>
          </div>

          <div className="modal-close">
            <p onClick={() => modalCloseFunction()}>X</p>
          </div>

        </Modal>

        {/* **************************************************** */}
        {/* PAGE CODE */}
        {/* **************************************************** */}
        
        {loading ? <div>Loading...</div> :
          error ? <div>No Records Found..</div> :

            <ul className="tiffin-list">
              {
                searchedVendorsList.map(x =>
                  <li key={x['_id']}>
                    <div className="tiffin">
                      <div className="image-div" onClick={() => modalFunction(x)}>

                        <img src={x.business_image} className="tiffin-image" alt='PRODUCT' />
                      </div>

                      <div className="tiffin-name">
                        <p>{x.business_name}</p>
                      </div>

                      <div className="tiffin-locality">
                        {x.business_address}
                      </div>

                      <div>
                        <p className="meals-heading">Meals:</p>
                        <table className="meal_search_page_table">
                          <tbody>
                            {x['meals_provided'].map(function (i) {
                              return <tr key={i['_id']}>
                                <td>{i['meal']}:</td>
                                <td className="meal-price-search-result">
                                  ₹{i['price']}
                                </td>
                              </tr>;
                            })}
                          </tbody>
                        </table>
                      </div>

                      <div>
                        Reviews
                      </div>
                    </div>
                  </li>

                )
              }
            </ul>

        }
      </main>
      <Footer />
    </div >
  )

}

export default SearchResultPage;