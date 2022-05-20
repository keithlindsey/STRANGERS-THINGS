   
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const base_URL= ("https://strangers-things.herokuapp.com/api/2202-ftb-et-web-pt") 

const SignUp = ({username, setUserName}) => {
    // const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmed, setConfirmed] = useState("");
    const history = useHistory()


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

            history.push("/posts")

        }

    }
    return (
        <>
            <h1 className='login_form'>Sign Up!!!!</h1>

            <form className='form' onSubmit={Submit}>
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

                <button type="submit" className="myButton">Submit</button>
            </form>

            
        </>
    )
}

export default SignUp;