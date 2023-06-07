import React, { useEffect, useState } from "react";
import { dataUsers } from "../functions/functions";
import { deleteUser } from "../functions/functions";

const Index1 = ()=>{
    const [data, setData] = useState(null);
    useEffect(()=>{
        dataUsers(setData)
    },[]);

    return(
            
        <div className="App">    

        <div className="container-fluid card-body" border="1">
        <div className="row mt-3">
            <div className="col-md-4b offset-4">
                <div className="d-grid mx-auto">
                    <a href="/newUser" className="btn btn-dark" data-bs-toggle='modal' data-bs-target='' >
                       New User
                    </a>
                </div>
            </div>
         </div>

         <div className="row mt-3">
            <div className="col-12 col-lg-8 offset-0 offset-lg-2">
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Email</th>
                                <th>Actions</th>
                                </tr>
                        </thead>
                        
                        <tbody className="table-group-divider">
                        { data != null ? (
                            data.map(item =>(
                        <tr key={item._id}> 
                        <td >{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.email}</td>

                        <td> <a href={`/editUser/${item._id}`} className="btn btn-success">Edit</a>
                        <b>  </b>
                         <button type="submit" onClick={() => deleteUser(item._id)} className="btn btn-danger"> Delete</button>
                         <b>  </b>
                         <a href={`/user/${item._id}`} className="btn btn-warning">See</a></td>
                        </tr>
                             ))
                          ): ('No data to display')}
                          
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
        </div>
        </div>
       
    )
}

export default Index1