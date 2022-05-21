import react from "react";
import { useState, useEffect } from "react";



const base_URL= ("https://strangers-things.herokuapp.com/api/2202-ftb-et-web-pt") 


const AuthentecatedPosts =({posts, setPosts, token}) =>{

         const deletePost = async (IdToDelete) => {
            const response = await fetch(`${base_URL}/posts/${IdToDelete}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }).then(response => response.json())
                .then (result => {
                    console.log(result);
                    
                    if (result){
                        const newPost = posts.filter(post=> post._id !== IdToDelete)
                        setPosts(newPost)
                    }
                })
                .catch(console.error);
        }

        useEffect(()=>{

            const getPosts = async () =>{
                const response = await fetch(`${base_URL}/posts/`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`},
                })
                    const result = await response.json()
                    console.log(result.data.posts);
                    setPosts(result.data.posts)
                 
                    
            }
            getPosts();
        },[])


        return (<>



              <div className="post_container">
        
        {
                    posts.map((post) => (
                    <div className="posts" key={post._id}>
                        <h2>{post.title}</h2>
                        <p>{post.description}</p>
                        <h3>Price: {post.price}</h3>
                        <h3>Seller: {post.author.username}</h3>
                        <h3>Location: {post.location}</h3> 
                        <button key ={post._id} disabled ={!post.isAuthor ? true : false} className="myButton "
                        onClick={()=> deletePost(post._id)}
                        >Delete</button>
                    </div>)
                )}
        
        </div>
        
        </>)








}

export default AuthentecatedPosts