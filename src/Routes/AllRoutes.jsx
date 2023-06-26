import React from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';
import {Routes, Route} from "react-router-dom"
import Todos from '../components/Todos';
import Create from '../components/Create';
import Delete from '../components/Delete';
import Update from '../components/Update';

function AllRoutes(props) {
    return (
        <Routes>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/todos' element={<Todos/>}></Route>
            <Route path='/create' element={<Create/>}></Route>
            <Route path='/update' element={<Update/>}></Route>
            <Route path='/delete' element={<Delete/>}></Route>
        </Routes>
    );
}

export default AllRoutes;