import react from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const base_URL= ("https://strangers-things.herokuapp.com/api/2202-ftb-et-web-pt")


const LoginForm = ({username, setUserName, password, setPassword}) => {
    
    const history = useHistory()

    const LoginPage = async (event) => {
        event.preventDefault();
        const response = await fetch(`${base_URL}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password
                }
            })
        }).then(response => response.json())
            .then(result => {
                console.log(result);
                const token = result.data.token;
                
                localStorage.setItem("userToken", token);
                alert(result.data.message)
            })
            .catch(console.error);

        setUserName("");
        setPassword("");

        history.push("/Posts")

    }
    return (
        <>
            <h1 className="login_form">Log In To your account!!!!</h1>

            <form  className="form" onSubmit={LoginPage}>
                <input type="text"
                 placeholder="Username"
                 className="user_name"
                 value={username}
                 onChange={(event) => setUserName(event.target.value)}>
                </input>

                <input type="password"
                 placeholder="Password"
                 className="password" 
                 value={password}
                 onChange={(event) => setPassword(event.target.value)}>
                </input> 

                <br></br><br></br>

                <button type="submit"
                 className="myButton ">
                 LOG IN
                </button>

            </form>
        </>
    )
}

export default LoginForm;

