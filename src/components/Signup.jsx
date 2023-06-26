import React from 'react';
import { useState } from 'react';

function Signup(props) {
    const [users, setUsers] = useState({
        ipAddress:"",
        email:"",
        password:""
    })

    const handleChange = (e) => {
        setUsers({...users, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:8080/signup", {
            method: "POST",
            headers:{
                "Content-type": "application/json"
            },
            body: JSON.stringify(users)
        }).then((res)=>res.json())
        .then((data) =>console.log(data))
        .catch((err) => console.log(err))
    }
    return (
        <div>
            <h1>Sign up</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='ipAddress' name='ipAddress' value={users.ipAddress} onChange={handleChange} /><br />
                <input type="email" placeholder='email' name='email' value={users.email} onChange={handleChange} /><br />
                <input type="password" placeholder='password' name='password' value={users.password} onChange={handleChange} /><br />
                <input type="submit" />
            </form>
        </div>
    );
}

export default Signup;