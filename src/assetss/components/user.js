import {React, useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {user, deleteUser} from "../functions/functions";


const User = ()=>{

    const [data, setData] = useState(null);
    const params = useParams();

    useEffect(() => {
    user(params.id, setData);
  }, []);

    return(
        <div className="User">
        { data != null ? (
            <div class="card card1">

                <div className="card-header">
                    <laber>DATA USER</laber>
                </div>

                <div class="card-body">
                <label> <b>UserId: </b> {data._id}</label>
                <hr></hr>
                <label> <b>Name: </b> {data.name}</label>
                <hr></hr>
                <label> <b>Age: </b> {data.age} years old</label>
                <hr></hr>
                <label> <b>Email: </b> {data.email}</label>
                </div>

                <div className="card-footer">
                <td> <a href={`/editUser/${data._id}`} className="btn btn-success">Edit</a>
                        <b>  </b>
                         <button type="submit" onClick={() => deleteUser(data._id)} className="btn btn-danger"> Delete</button>
                         <b>  </b>
                         <a type="button" className="btn btn-dark" href="/">Back home</a>
                </td>
                </div>
         </div>
        ): ('No data to display')

        } 
        </div>
    )
}

export default User;