import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

const base_URL =   "https://strangers-things.herokuapp.com/api/2202-ftb-et-web-pt"

// import Posts from './Posts';

const App = () => {
    
  const[posts, setPosts] = useState([]);
  console.log(`posts`, posts)

  useEffect(() => {
    const fetchPosts = async () => {
        const resp =await fetch(`${base_URL}/posts`) ;
        const data =await  resp.json();
        console.log(`data`, data);
        setPosts(data);
    }
        fetchPosts();
  },[])
  

  console.log(posts)


 return(
   <div>
 <header>Strangers Things</header>
   
    {posts.map(post => <div key={post.id}>

      <h3>{post.username}</h3>
      <div>{post.description}</div>

      </div>

      
      
      )}







  </div>


 )

}
 
 


  ReactDOM.render(
    <App />,
   
    document.getElementById('app'),
  )