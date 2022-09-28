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
import RequiredAuth from '../Pages/RequiredAuth/RequiredAuth';

function MainRoutes() {
    return (
        <>
            <Routes>

                <Route path='/login' element={<Login />} />
                <Route path='/singup' element={<Singup />} />



                <Route path='/' element={<Homepage />} />


                <Route
                    path='/sidebar'
                    element={
                        // <RequiredAuth>
                            <SideBar />
                        // </RequiredAuth>
                    }
                />
                <Route path='/member' element={<Member />} />

            </Routes>

        </>

    )
}

export default MainRoutes
