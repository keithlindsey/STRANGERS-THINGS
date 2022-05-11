import React, { useEffect } from "react";
import { useState } from "react";

const base_URL =   "https://strangers-things.herokuapp.com/api/2202-ftb-et-web-pt"


const Posts =(props) =>{
    
    const [post, setPosts] = useState([])
    useEffect(() => {
            const fetchPosts = async () => {
                const resp =await fetch(`${base_URL}/posts`) ;
                const data =await  resp.json();
                console.log(`data`, data);
                setPosts(data)
                console.log(resp.json())

            }
                

            fetchPosts()
}, [])



    return <> 

    <div>hi</div>
     {/* {posts.map(post =>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <div>{post.body}</div>
            
            
            
            /</div>)} */}

    
    
    </>



}


export default Posts