import react from "react";
import { useState, useEffect } from "react";

const base_URL= ("https://strangers-things.herokuapp.com/api/2202-ftb-et-web-pt") 

const Posts =() => {

    const [posts, setPosts] = useState([])
    const [search, setSearchTerm] = useState("")

  

    useEffect(()=>{
        const getPosts = async () => {
            const response = await fetch(`${base_URL}/posts`)
                .then(response => response.json())
                .then(result => {
                    console.log(result.data.posts);
                    setPosts(result.data.posts);
                })
                .catch(console.error);
        }
        getPosts();
    },[])

            

         
             return (
                <>
                <div>
                    <input type = "text" placeholder="Search Posts" value={search} className = "Search Bar"
                     onChange={(event) => setSearchTerm(event.target.value)}></input>
                
                
                </div>

              



                {
                    posts.map((post) => (
                    <div key={post._id}>
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