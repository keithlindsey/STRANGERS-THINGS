import react from "react";
import Posts from "./Posts";
import AuthentecatedPosts from "./authenticatedposts";


const SwithUsers =  ({posts, setPosts, token}) =>{
    const userToken = localStorage.getItem("userToken");

    return(
        <>
        {userToken ? <AuthentecatedPosts posts={posts} setPosts={setPosts} token={token}/> :<Posts posts={posts} setPosts={setPosts}/>    }    
        </>
    )


}

export  default SwithUsers
