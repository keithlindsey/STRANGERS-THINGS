import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import { BrowserRouter, Route, Link, Routes, Switch } from 'react-router-dom';


import Posts from './components/Posts';

const App = () => {
   return  <> 
          <BrowserRouter>
        <div className='Links_Container'>
            <div className='Links_Header'>
              <p className='Title'>Strangers Things</p>


              <nav className='Nav_Bar'>
                <Link to ="/Posts" className="link">Posts</Link>
                <Link to ='/User_Account' className='link'>Your Account</Link>
                <Link to ="/signup" className="link">SignUp</Link>
                <Link to ="/login" className="link">LogIn</Link>
                <Link to ="/logout" className="link">LogOut</Link>
              </nav>
            
            
            </div>

            <div className='Main'>
              
            <Route path="/Posts">
              <Posts />
            </Route>


           

           
            </div>
        
        
        </div>
        </BrowserRouter>
    
    </>





}

    
  
 


  ReactDOM.render(
    // <BrowserRouter>
      <App />,

    // </BrowserRouter>,
    
   
    document.getElementById('app'),
  )