import react from "react";
import Posts from "./Posts";
import UserPosts from "./Userposts";
import AuthentecatedPosts from "./authenticatedposts";
import CreatePost from "../api";

const SwithPost =  () =>{

    const userToken = localStorage.getItem("userToken");

    return(
        <>
        {userToken ? <CreatePost/> :<div>Please Sign In..</div>    }    
        </>
    )


}

export  default SwithPost