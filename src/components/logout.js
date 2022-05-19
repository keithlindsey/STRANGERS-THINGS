import react, { useEffect, useState } from "react";
import reactDom from "react-dom";


const base_URL= ("https://strangers-things.herokuapp.com/api/2202-ftb-et-web-pt") 
const token = localStorage.getItem("userToken")
console.log(token)


const LogOut =() =>{
    console.log(token)
    localStorage.clear();
    console.log(token)
   

    return (

        <h1>You have logged out, please come back!!!!</h1>

    )
}

export default LogOut