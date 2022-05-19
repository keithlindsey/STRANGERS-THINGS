import react from "react";
import Posts from "./Posts";
import AuthentecatedPosts from "./authenticatedposts";
import { useState } from "react";

const SwithUsers =  () =>{
    const [posts, setPosts] = useState ([])

    const userToken = localStorage.getItem("userToken");

    return(
        <>
        {userToken ? <AuthentecatedPosts posts={posts} setposts={setPosts}/> :<Posts posts={posts} setposts={setPosts}/>    }    
        </>
    )


}

export  default SwithUsers
