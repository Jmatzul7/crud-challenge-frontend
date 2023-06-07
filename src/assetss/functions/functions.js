import Swal from 'sweetalert';
import { React} from 'react'
const url = process.env.REACT_APP_BACKEND_URL

//GET ALL USER
const dataUsers = (state) => {
    fetch(`${url}/api/user`)
      .then((response) => response.json())
      .then((data) => state(data))
      .catch((error) => console.error(error));
  };


  //GET USER BY ID
  const user = async (id, state) => {
    try {
      const response = await fetch(`${url}/api/user/${id}`);
      const data = await response.json();
      state(data);
    } catch (error) {
      console.error(error);
    }
  };
  

  //DELETE ONE USER
  const deleteUser = async (id, state) => {
    try {
      const response = await fetch(`${url}/api/user/${id}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        // The request was completed successfully
        Swal({
          title: 'Delete',
          text: 'User delete successfully',
          icon: 'success',
        
        }).then((willRedirect) => {
          if (willRedirect) {
            window.location.href='/'; // reload page
          }
        });
      } else {
        
      }
    } catch (error) {
      console.error(error);
    }
  };
  
//CREATE NEW USER
  const createUser = async (data) => {
    try {
      const response = await fetch(`${url}/api/user/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        // The request was completed successfully
        Swal({
          title: 'User created successfully',
          text: 'Do you want to add a new user?',
          icon: 'success',
          buttons: {
            reload: {
              text: 'New user',
              value: 'reload',
            },
            redirect: {
              text: 'Home',
              value: 'redirect',
            },
            cancel: 'Cancel',
          },
        }).then((value) => {
          switch (value) {
            case 'reload':
              window.location.reload(); // reload page
              break;
            case 'redirect':
              window.location.href='/';// Redirect page home
              break;
            default:
              // Do nothing
              break;
          }
        });
       
      } else {
        //There was an error in the request
        Swal({
          title: 'Error',
          text: 'There was an error in the operation.',
          icon: 'error',
          button: 'Ok',
        });
        
      }
    } catch (error) {
      console.error(error);
    }
  };

export {
    dataUsers,
    user,
    deleteUser,
    createUser,
    
}