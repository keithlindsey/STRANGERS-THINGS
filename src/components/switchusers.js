import react from "react";
import Posts from "./Posts";
import AuthentecatedPosts from "./authenticatedposts";
import { useState } from "react";

const SwithUsers =  ({posts, setPosts,}) =>{
    const userToken = localStorage.getItem("userToken");

    return(
        <>
        {userToken ? <AuthentecatedPosts posts={posts} setPosts={setPosts}/> :<Posts posts={posts} setPosts={setPosts}/>    }    
        </>
    )


}

export  default SwithUsers
