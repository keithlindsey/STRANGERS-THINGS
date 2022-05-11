import react from "react";
import { useState, useEffect } from "react";

const base_URL= ("https://strangers-things.herokuapp.com/api/2202-ftb-et-web-pt") 


const Posts =() => {

    const [posts, setPosts] = useState([])


    useEffect =(() =>{


       const getPosts= async()=>{
       
          const response = await fetch(`${base_URL}/posts`)
            .then(response => response.json())
            .then(result => {
            console.log(result.data.posts);
            setPosts(result.data.posts);
  })
            .catch(console.error);



    }
            getPosts();

            }, [])


            return (
                <>
                
                <div>
                    <h3>working</h3>
                </div>
                
                
                
                
                </>
            )






}

export default Posts