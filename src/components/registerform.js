   
import React, { useState } from 'react';

const base_URL= ("https://strangers-things.herokuapp.com/api/2202-ftb-et-web-pt") 

const SignUp = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmed, setConfirmed] = useState("");


    const Submit = async (event) => {
        event.preventDefault();

        if (password !== confirmed) {
            alert("Passwords Don't match")
            setPassword("")
            setConfirmed("")
        } else {
            const response = fetch(`${base_URL}/users/register`, 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/json',
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
                    localStorage.setItem("userToken", token)
                    console.log(token);
                })
                .catch(console.error);

            setUserName("");
            setPassword("");
            setConfirmed("");

        }

    }
    return (
        <>
            <h1 id="register">Sign Up!!!!</h1>

            <form onSubmit={Submit}>
                <input type="text" placeholder="Username"
                    value={username} className="user_name"
                    onChange={(event) => { setUserName(event.target.value) }}
                    minLength={5} required>
                </input>

                <input type="password" placeholder="Password"
                    value={password} className="sign_up"
                    onChange={(event) => { setPassword(event.target.value) }}
                    minLength={5} required>
                </input>

                <input type="password" placeholder="Password Confirmation"
                    value={confirmed} className="confirm_pw"
                    onChange={(event) => setConfirmed(event.target.value)}
                    required>
                </input>

                <br></br><br></br>

                <button type="submit" className="submit-Btn">Submit</button>
            </form>

            
        </>
    )
}

export default SignUp;