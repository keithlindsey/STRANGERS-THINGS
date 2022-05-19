import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import { BrowserRouter, Route, Link, Routes, Switch } from 'react-router-dom';


import Posts from './components/Posts';
import SignUp from './components/registerform';
import LoginPage from './components/login';
import LogOut from './components/logout';
import SwithUsers from './components/switchusers';
import CreatePost from './api';
import AuthentecatedPosts from './components/authenticatedposts';
import SwithPost from './components/SwitchPosts';

const App = () => {
   return  <> 
          <BrowserRouter>
        <div className='Links_Container'>
            <div className='Links_Header'>
              <p className='Title'>Strangers Things</p>


              <nav className='Nav_Bar'>
                <Link to ="/Posts" className="link">Posts</Link>
                <Link to ='/User_Account' className='link'>Create a Listing</Link>
                <Link to ="/signup" className="link">SignUp</Link>
                <Link to ="/login" className="link">LogIn</Link>
                <Link to ="/logout" className="link">LogOut</Link>
              </nav>
            
            
            </div>

            <div className='Main'>
              
            <Route path="/Posts">
              < SwithUsers/>
            </Route>

            <Route path="/signup">
              <SignUp />
            </Route>

            <Route path="/login">
              <LoginPage />
            </Route>

            <Route path="/logout">
              <LogOut />
            </Route>

            <Route path="/User_Account">
              <SwithPost />
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