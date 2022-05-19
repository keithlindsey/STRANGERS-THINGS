import react from "react";
import Posts from "./Posts";
import UserPosts from "./Userposts";
import AuthentecatedPosts from "./authenticatedposts";

const SwithUsers =  () =>{

    const userToken = localStorage.getItem("userToken");

    return(
        <>
        {userToken ? <AuthentecatedPosts/> :<Posts/>    }    
        </>
    )


}

export  default SwithUsers
