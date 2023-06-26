import React from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';
import {Routes, Route} from "react-router-dom"

function AllRoutes(props) {
    return (
        <Routes>
            <Route path='login' element={<Login/>}></Route>
            <Route path='signup' element={<Signup/>}></Route>
        </Routes>
    );
}

export default AllRoutes;