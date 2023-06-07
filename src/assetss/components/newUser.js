import React, { useState } from "react";
import { createUser } from "../functions/functions";

const NewUser = () => {
  const [userData, setUserData] = useState({
    name: "",
    age: "",
    email: "",
  });



  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

    const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await createUser(userData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container col-md-6 " >
        <div className="card ">
            <div className="card-header">
             <h2>Create New User</h2>
            </div>

      <div className="card-body">
      <form className="form-group " onSubmit={handleSubmit}>
        <div >
          <label><b>Name:</b></label>
          <input
          required
          className="form-control"
            type="text"
            name="name"
            placeholder="Enter your name"
            value={userData.name}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <br></br>
          <label><b>Age:</b> </label>
          <input 
          required
            className="form-control"
            type="text"
            name="age"
            placeholder="Enter your age for explample '19'"
            value={userData.age}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <br></br>
          <label><b>Email:</b></label>
          <input
            pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}"
            required
            className="form-control"
            type="email"
            name="email"
            placeholder="example@email.com"
            value={userData.email}
            onChange={handleInputChange}
          />
        </div>
        
        <br></br>
        <button className="btn btn-success" type="submit" href='' >Create User</button>
        <b>  </b>
        <a type="button" className="btn btn-dark" href="/">
                  Back home
                </a>
      </form>

      </div>
      </div>
    </div>
  );
};

export default NewUser;
