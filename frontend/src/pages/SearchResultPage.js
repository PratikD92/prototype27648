import React, { useState } from 'react';
import { useSelector } from "react-redux";
import Header from './templates/Header';
import Footer from './templates/Footer';
import "../search_result.css";
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import "../modal_style.css";

function SearchResultPage(props) {

  // Opening modal using state
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [bname, setBname] = useState('');
  const [bimage, setBimage] = useState('');
  const [blocality, setBLocality] = useState('');
  const [bmeals, setBmeals] = useState([]);

  let pic = '';

  const vendorsList = useSelector(state => state.searchedVendors);
  const { searchedVendorsList, loading, error } = vendorsList;
  console.log(searchedVendorsList);

  const modalFunction = (t) => {
    setModalIsOpen(true);
    setBname(t.business_name);
    setBimage(t.business_image);
    setBLocality(t.business_address);
    setBmeals(t.meals_provided);
  };

  return (

    <div className="grid-container">
      <Header />
      <main className="main">

        <Modal isOpen={modalIsOpen}>

          <div className="modal-heading">
            {bname}
          </div>

          <div className="modal-main">

            <div className="modal-image-div">
              <img src={bimage} className="modal-image" alt='PRODUCT' />
            </div>

            <div className="modal-details">
              <ul>
                <li>
                  {blocality}
                </li>

                <li>
                  <div>
                    <strong>Meals:</strong>
                    <table>
                      <tbody>
                        {bmeals.map(function (i) {
                          return <tr>
                            <td>{i['meal']}</td>
                            <td>
                              : ₹{i['price']}
                            </td>
                          </tr>;
                        })}
                      </tbody>
                    </table>
                  </div>
                </li>
              </ul>
            </div>

            <div className="modal-checkout">
              <ul>
                <li>Services: </li>
                <li>Total: </li>
                <li>
                  <button className="checkout-button">
                    Checkout
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="second-row">
            <div>
              <h4>Description:</h4>
              <p>Lorem ipsum dolor sit amet</p>
            </div>

            <div className="modal-close">
              <button onClick={() => setModalIsOpen(false)}>Close</button>
            </div>
          </div>

        </Modal>


        {loading ? <div>Loading...</div> :
          error ? <div>No Records Found..</div> :

            <ul className="tiffin-list">
              {
                searchedVendorsList.map(x =>
                  <li key={x['_id']}>
                    <div className="tiffin">
                      {/* <Link to={"/tiffin-details/" + x._id}> */}
                      {/* <div className="image-div" onClick={() => setModalIsOpen(true)}> */}
                      <div className="image-div" onClick={() => modalFunction(x)}>

                        <img src={x.business_image} className="tiffin-image" alt='PRODUCT' />
                      </div>
                      {/* </Link> */}

                      <div className="tiffin-name">
                        {x.business_name}
                      </div>

                      <div className="tiffin-locality">
                        {x.business_address}
                      </div>

                      <div>
                        <strong>Meals:</strong>
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