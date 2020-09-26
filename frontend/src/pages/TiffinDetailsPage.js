import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetTiffinDetailAction } from "../actions/userActions";
import Footer from "./templates/Footer";
import Header from "./templates/Header";

function TiffinDetailsPage(props) {

  const tiffinDetails = useSelector(state => state.tiffinDetails);
  const { tiffin_details_state, loading, error } = tiffinDetails
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetTiffinDetailAction(props.match.params.id));
    return () => {
    };
  }, []);

  return (
    <div className="grid-container">
      <Header />
      <main className="main">

        {loading ? <div>Loading...</div> :
          error ? <div>{error}</div> :
            <ul className="tiffin-list">
              {
                tiffin_details_state.map(x =>
                  <li key={x['_id']}>
                    <div className="tiffin">
                      <div className="image-div">
                        <img src={x.business_image} className="tiffin-image" alt='PRODUCT' />
                      </div>

                      <div className="tiffin-name">
                        {x.business_name}
                      </div>

                      <div className="tiffin-locality">
                        {x.business_address}
                      </div>
                    </div>
                  </li>
                )
              }
            </ul>
        }
      </main>
      <Footer />  
    </div>
  );
}

export default TiffinDetailsPage;
