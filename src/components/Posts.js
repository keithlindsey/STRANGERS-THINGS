import react from "react";
import { useState, useEffect } from "react";


const base_URL= ("https://strangers-things.herokuapp.com/api/2202-ftb-et-web-pt") 

const Posts =({posts, setPosts}) => {
   useEffect(()=>{
        const getPosts = async () => {
            const response = await fetch(`${base_URL}/posts`)
                .then(response => response.json())
                .then(result => {
                    console.log(setPosts)
                    console.log(result.data.posts);
                    setPosts(result.data.posts);
                    ;
                })
                .catch(console.error);
        }
        getPosts();
    },[])

            

         
             return (
                <>
                

              



                {
                    posts.map((post) => (
                    <div className="posts"
                         key={post._id}>
                        <h2>{post.title}</h2>
                        <p>{post.description}</p>
                        <h3>Price: {post.price}</h3>
                        <h3>Seller: {post.author.username}</h3>
                        <h3>Location: {post.location}</h3> 
                    </div>)
                )}
                    
               
                
        

                </>
            )






}

export default Posts