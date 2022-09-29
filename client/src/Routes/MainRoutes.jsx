import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";

import Login from '../Pages/Account/Login'
import Singup from '../Pages/Account/Singup'
import SideBar from '../Pages/TMETRIC_Pages/SideBar';
import Member from '../Pages/TMETRIC_Pages/Member';
import { Homepage } from '../Pages/HomePage/Homepage';
import Task from '../Pages/Task/Task';

function MainRoutes() {
    return (
        <>
            <Routes>

                <Route path='/login' element={<Login />} />
                <Route path='/singup' element={<Singup />} />



                <Route path='/' element={<Homepage/>} />


                <Route path='/sidebar' element={<SideBar />} />
                <Route path='/member' element={<Member />} />
                <Route path='/task' element={<Task />} />
            </Routes>

        </>

    )
}

export default MainRoutes
