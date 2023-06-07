import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './assetss/services/service.js'
import Index1 from './assetss/components/index.js';
import UserEdit from './assetss/components/editUser.js';
import NewUser from './assetss/components/newUser.js';
import User from './assetss/components/user.js'


function App() {

  return (

    <div className="container">
      <BrowserRouter>
      <Routes>
        
        <Route path='/' element={ <Index1></Index1>}></Route>
        <Route path='/editUser/:id' element={<UserEdit></UserEdit>}></Route>
        <Route path='/newUser' element={<NewUser></NewUser>}></Route>
        <Route path='/user/:id' element={<User></User>}></Route>

      </Routes>
      </BrowserRouter>

      
    </div>
    
  );
}

export default App;

