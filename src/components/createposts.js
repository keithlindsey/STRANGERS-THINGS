import react from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";



const base_URL= ("https://strangers-things.herokuapp.com/api/2202-ftb-et-web-pt") 

const CreatePost = ({token}) =>{
    const [title, setTitle] = useState("");
    const [description, setDescirtion] = useState("");
    const [price, setPrice] = useState ("");
    const [location, setLocation] = useState ("");
    const [willDeliver, setWillDeliver] = useState(false);
    const history= useHistory()
    
    

    const submit = async (event) => {
        event.preventDefault();
       
        const response = fetch(`${base_URL}/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },

            body: JSON.stringify({
                post: {
                    title: title,
                    description: description,
                    price: price,
                    location: location,
                    willDeliver: willDeliver,
                }
            })
        }).then(response => response.json())
            .then(result =>{
                console.log([result.data.post]);
             })
            .catch(console.error);


            setTitle("");
            setDescirtion("");
            setPrice("");
            setLocation("");
            setWillDeliver(false);
            history.push("/posts")

    }

    return (
        <>
                <h1 className="login_form"> Create A Listing!!</h1>

                <form className="form">

                <input type="Text" className="New_post" placeholder="Title"  value={title}
                    onChange={(event) =>{setTitle(event.target.value)}}
                ></input>

                 <input type="Text" className="New_post" placeholder="description"  value={description}
                    onChange={(event) =>{setDescirtion(event.target.value)}}
                ></input>


                <input type="Text" className="New_post" placeholder="Price"  value={price}
                    onChange={(event) =>{setPrice(event.target.value)}}
                ></input>

                <input type="Text" className="New_post" placeholder="Location"  value={location}
                    onChange={(event) =>{setLocation(event.target.value)}}
                ></input>

                <input type = "checkbox" className="Check_box" value="Deliver"
                        onClick={()=> setWillDeliver(true)}>

                </input>

                <label htmlFor="willDeliver" className="deliver">Willing to Deliver?</label>

                <br></br><br></br>



                <button onClick={submit} type="submit" className="myButton ">Submit</button>






                </form>






        </>

    )

}

export default CreatePost 