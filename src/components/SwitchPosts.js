import react from "react";
import CreatePost from "./createposts";


const SwithPost =  ({token}) =>{
    const userToken = localStorage.getItem("userToken");
    return(
        <>
        {userToken ? <CreatePost token ={token}/> :<div className="login_form">Please Sign In..</div>    }    
        </>
    )


}

export  default SwithPost