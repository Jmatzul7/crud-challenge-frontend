import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { user } from "../functions/functions";
import Swal from 'sweetalert';

const url = process.env.REACT_APP_BACKEND_URL
const User = () => {
const [data, setData] = useState(null);
const params = useParams();

  useEffect(() => {
    user(params.id, setData);
  }, []);

  const updatUser = async () => {
    
    try {
      const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
      const isEmailValid1 = emailRegex.test(data.email);
   
      if  (!isEmailValid1) {
        // Perform further actions, such as submitting the form
        Swal({
          title: 'Update',
          text: 'Email format is incorrect',
          icon: 'error',
        });
      } else {
        // Display an error message or take appropriate action
        const response = await fetch(`${url}/api/user/${params.id}`, {
          method: 'PUT',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        
        if (response.ok) {
          Swal({
            title: 'Update',
            text: 'User updated successfully',
            icon: 'success',
          }).then((willRedirect) => {
            if (willRedirect) {
              window.location.href='/'; // redirect page home
            }});
        }
      } 
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div>
      <br />

      {data !== null ? (
        <div className="card card1">
          <div className="card-header text-center">
            <h2>Edit User Data</h2>
          </div>
          <div className="card-body">
            <div className="form-group">
              <label className="control-label col-sm-2">Name:</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="control-label col-sm-2">Age:</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  value={data.age}
                  onChange={(e) =>setData({ ...data, age: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="control-label col-sm-2">Email</label>
              <div className="col-sm-10">
                <input
                  pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}"
                  required
                  type="email"
                  className="form-control"
                  value={data.email}
                  onChange={(e) =>  setData({ ...data, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <hr />
                 <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={updatUser}>
                  Update 
                </button>
                   
                <a type="button" className="btn btn-dark" href="/">
                   Back home
                </a>
              </div>

            </div>

          </div>
        </div>
      ) : (
        "No data to display"
      )}
    </div>
  );
};

export default User;
