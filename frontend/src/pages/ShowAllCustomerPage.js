import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {getAllUsersAction} from "../actions/adminActions";
import Header from "./templates/Header";
import Footer from "./templates/Footer";

function ShowAllCustomers(props) {

  const allUsers = useSelector(state => state.allUsersList);
  const { all_users, loading, error } = allUsers;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsersAction());
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
                  <th>Email</th>
                  <th>Name</th>
                  <th>ID</th>
                  <th>isAdmin</th>
                </tr>
              </thead>

              <tbody>
                {all_users.map(x =>
                  <tr key={x['_id']}>
                    <td>
                      {x['email']}
                    </td>
                    <td>
                      {x['first_name']}
                    </td>
                    <td>
                      {x['_id']}
                    </td>
                    <td>
                      {x['isAdmin']}
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

export default ShowAllCustomers;
