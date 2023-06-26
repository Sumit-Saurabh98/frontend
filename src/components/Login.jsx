import React from 'react';
import { useState } from 'react';
import {useNavigate} from "react-router-dom"

function Login(props) {
    const BASE_URL = "https://calm-moccasins-goat.cyclic.app"
    const naviagte = useNavigate()
    const [users, setUsers] = useState({
        email:"",
        password:""
    })

    const handleChange = (e) => {
        setUsers({...users, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`${BASE_URL}/login`, {
            method: "POST",
            headers:{
                "Content-type": "application/json"
            },
            body: JSON.stringify(users)
        }).then((res)=>res.json())
        .then((data) =>{
            if(data.token){
                localStorage.setItem("eva_token", data.token)
            }
            naviagte("/todos")
        }).then((data) =>console.log(data))
        .catch((err) => console.log(err))
    }
    return (
        <div>
            <h1>Login in</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='email' name='email' value={users.email} onChange={handleChange} /><br />
                <input type="password" placeholder='password' name='password' value={users.password} onChange={handleChange} /><br />
                <input type="submit" />
            </form>
        </div>
    );
}

export default Login;