import react from "react";
import CreatePost from "../api";
import { useState } from "react";

const SwithPost =  () =>{
    const [posts, setPosts] = useState([])
    const userToken = localStorage.getItem("userToken");

    return(
        <>
        {userToken ? <CreatePost posts ={posts} setPosts={setPosts}/> :<div>Please Sign In..</div>    }    
        </>
    )


}

export  default SwithPost