import React from 'react';
import { useState, useEffect } from 'react';

function Todos(props) {
    const [todos, setTodos] = useState([])
    const BASE_URL = "https://calm-moccasins-goat.cyclic.app"
    
    useEffect(()=>{
        const token = localStorage.getItem("eva_token")
        fetch(`${BASE_URL}/todos`, {
            method: "GET",
            headers: {
              "Authorization": `Bearer ${token}`
            }
          })
            .then((res) => res.json())
            // .then((data) => setTodos(data))
            .then((data)=>setTodos(data.todos))
            .catch((error) => {
              console.error("Error:", error);
            });
          
    },[])
    return (
        <div>
            <h1>Todos</h1>
            {
                todos && todos.map((todo, i) =>{
                    return <div style={{backgroundColor:"red"}} key={i}>
                        <h2>{todo.taskname}</h2>
                        <h3>{todo.status}</h3>
                        <p>{todo.tag}</p>
                    </div>
                })
            }
        </div>
    );
}

export default Todos;