import react from "react";
import CreatePost from "./createposts";
import { useState } from "react";

const SwithPost =  ({posts, setPosts}) =>{
   
    const userToken = localStorage.getItem("userToken");

    return(
        <>
        {userToken ? <CreatePost posts ={posts} setPosts={setPosts}/> :<div className="login_form">Please Sign In..</div>    }    
        </>
    )


}

export  default SwithPost