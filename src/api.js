import react from "react";
import { useState } from "react";

const base_URL= ("https://strangers-things.herokuapp.com/api/2202-ftb-et-web-pt") 

const CreatePost = ({posts, setPosts}) =>{
    const [title, setTitle] = useState("");
    const [description, setDescirtion] = useState("");
    const [price, setPrice] = useState ("");
    const [location, setLocation] = useState ("");
    const [willDeliver, setWillDeliver] = useState(false);

    const submit = async (event) => {
        event.preventDefault();

        const token= localStorage.getItem("userToken")

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

                const array = posts.concat([result.data.post])

                console.log(posts)

            })
            .catch(console.error);


            setTitle("");
            setDescirtion("");
            setPrice("");
            setLocation("");
            setWillDeliver(false);

    }

    return (
        <>
                <h1> Create Post!!</h1>

                <form>

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



                <button onClick={submit} type="submit" className="submit_post_btn">Submit</button>






                </form>






        </>

    )

}

export default CreatePost 