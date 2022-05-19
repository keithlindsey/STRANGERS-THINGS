import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import { BrowserRouter, Route, Link, Routes, Switch } from 'react-router-dom';

const base_URL= ("https://strangers-things.herokuapp.com/api/2202-ftb-et-web-pt") 
const token = localStorage.getItem("userToken");

const [posts, setPosts] = useState ([])

const deletePost = async (IdToDelete) => {
    const response = await fetch(`${base_URL}/posts/${IdToDelete}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(response => response.json())
        .then (result => {
            console.log(result);
            
            if (result){
                const newPost = posts.filter(post=> post._id !== IdToDelete)
                setPosts(newPost)
            }
        })
        .catch(console.error);
}

export default deletePost