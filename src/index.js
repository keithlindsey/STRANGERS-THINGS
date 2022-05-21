import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useState, } from 'react';
import { BrowserRouter, Route, Link, Routes, Switch } from 'react-router-dom';
import SignUp from './components/registerform';
import LoginPage from './components/login';
import LogOut from './components/logout';
import SwithUsers from './components/switchusers';
import SwithPost from './components/SwitchPosts';

const App = () => {
  
  const [posts, setPosts] = useState([])
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const defaultToken = localStorage.getItem("userToken")
  const [token, setToken] = useState(defaultToken);
  return  <> 
          <BrowserRouter>
            <div className='Links_Container'>
            <div className='Links_Header'>
                   <p className='Title'>Strangers Things</p>


              <nav className='nav_bar'>
                <Link to ="/Posts" className="link">Posts</Link>
                <Link to ='/User_Account' className='link'>Create a Listing</Link>
                <Link to ="/signup" className="link">SignUp</Link>
                <Link to ="/login" className="link">LogIn</Link>
                <Link to ="/logout" className="link">LogOut</Link>
              </nav>
            
            
            </div>

            <div className='Main'>
              
            <Route path="/Posts">
              < SwithUsers posts = {posts} setPosts={setPosts} token = {token} />
            </Route>

            <Route path="/signup">
              <SignUp  username = {username} setUserName={setUserName} password={password} setPassword={setPassword}/>
            </Route>

            <Route path="/login">
              <LoginPage username = {username} setUserName={setUserName}  password={password} setPassword={setPassword}/>
            </Route>

            <Route path="/logout">
              <LogOut />
            </Route>

            <Route path="/User_Account">
              <SwithPost token={token}/>
            </Route>

           

           
            </div>
        
        
        </div>
        </BrowserRouter>
    
    </>





}

    
  
 


  ReactDOM.render(
   
      <App />,

    
    
   
    document.getElementById('app'),
  )