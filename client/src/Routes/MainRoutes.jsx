import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";
import Home from '../Pages/HomePage/Home';

import Login from '../Pages/Account/Login'
import Singup from '../Pages/Account/Singup'
import SideBar from '../Pages/TMETRIC_Pages/SideBar';
import Member from '../Pages/TMETRIC_Pages/Member';

function MainRoutes() {
    return (
        <>
            <Routes>

                <Route path='/login' element={<Login />} />
                <Route path='/singup' element={<Singup />} />

                <Route path='/' element={<Home />} />

                <Route path='/sidebar' element={<SideBar />} />
                <Route path='/member' element={<Member />} />

            </Routes>

        </>

    )
}

export default MainRoutes
