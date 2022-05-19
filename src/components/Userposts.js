import react from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Link, Routes, Switch } from 'react-router-dom';
import CreatePost from "../api";

const base_URL= ("https://strangers-things.herokuapp.com/api/2202-ftb-et-web-pt") 

const UserPosts = () => {
    const [posts, setPosts] = useState([]);
    const [postID, setPostId] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const token = localStorage.getItem("userToken")

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
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`

                             },
                    }).then (response =response.json())
                        .then(result =>{
                            console.log(result.data.posts);
                            setPosts(result.data.posts)
                        })
                        .catch(console.error)
                }
                getPosts();
            },[])


        function  matchPosts(post, text){
                if (post.toLowerCase().includes(text.toLowerCase())){
                    return true
                }
            }

            const postFiltered = posts.filter(post =>matchPosts(post,searchTerm));
            const displayPosts = searchTerm.length ? postFiltered : posts;

            return(
                <>
                <div className="Add_post">
                     <h1 className="post_title">Posts</h1>

                     <input type="text" placeholder="Search Post" value={searchTerm}
                     className="search_bar" onChange={(event) => setSearchTerm(event.target.value)}></input>


                     {/* <link to="/posts/add" className="add_link">Add Listing</link> */}
                </div>

                <div className="new_post">
                    <Route path ="/posts/add">
                        <CreatePost posts={posts} setPosts={setPosts} />
                    </Route>

                </div>

                  {
                      displayPosts.map((post) => (

                        <div key={post._id}>
                            <h2>{post.title}</h2>
                            <h4>{post.description}</h4>
                            <h3>Price: {post.price}</h3>
                            <h3>Seller: {post.author.username}</h3>
                            <h3>Location: {post.location}</h3>

                            {/* <button disabled={post.isAuthor ? true : false}
                            className="send_Message" onClick={() => setPostId(post._id)}>
                            Send Message
                            </button> */}

                            <button disabled={post.isAuthor ? false : true}
                            className="delete-btn" onClick={() => deletePost(post._id)}>
                            Delete
                            </button>


                            {/* {
                            postId.length ? <SendMessage posts={posts} setPosts={setPosts} postId={postId} setPostId={setPostId} /> : ""
                            } */}

                            </div>)




                       ) }

                </>
            )


}

export default UserPosts
