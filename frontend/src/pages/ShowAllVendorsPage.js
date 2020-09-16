import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Header from "./templates/Header";
import Footer from "./templates/Footer";
import { getAllVendorsAction } from "../actions/adminActions";

function ShowAllVendorsPage(props) {

  const allVendors = useSelector(state => state.allVendorsList);
  const { all_vendors, loading, error } = allVendors;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllVendorsAction());
    return () => {
    };
  }, []);

  return (
    <div className="grid-container">

      <Header />

      {loading ? <div>Loading...</div> :
        error ? <div>{error}</div> :
          <main className="main">
            <table border='1'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Meals</th>
                  <th>Image</th>
                </tr>
              </thead>

              <tbody>
                {all_vendors.map(x =>
                  <tr key={x['_id']}>
                    <td>
                      {x['business_name']}
                    </td>
                    <td>
                      {x['business_address']}
                    </td>
                    <td>
                      <table border='1'>
                        <tbody>
                          {x['meals_provided'].map(function (i) {
                            return <tr key={i['_id']}>
                              <td>{i['meal']}</td>
                              <td>{i['price']}</td>
                            </tr>;
                          })}
                        </tbody>
                      </table>
                    </td>
                    <td>
                      {x['business_image']}
                    </td>
                  </tr>

                )}
              </tbody>
            </table>

          </main>
      }
      <Footer />

    </div >
  );

}

export default ShowAllVendorsPage;
