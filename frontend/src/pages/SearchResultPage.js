import React from 'react';
import { useSelector } from "react-redux";
import Header from './templates/Header';
import Footer from './templates/Footer';

function SearchResultPage(props) {

  const vendorsList = useSelector(state => state.searchedVendors);
  const { searchedVendorsList, loading, error } = vendorsList;
  console.log(searchedVendorsList);

  return (

    <div className="grid-container">
      <Header />
      <main className="main">
        {loading ? <div>Loading...</div> :
          error ? <div>No Records Found..</div> :

          <ul className="tiffins">
            {
              searchedVendorsList.map(x =>
                  <li key={x['_id']}>
                    <div className="tiffin-image">
                      <img src={x.business_image} alt='IMAGE' />
                    </div>

                    <div>
                      { x.business_image}
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