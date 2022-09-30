import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";

import Login from '../Pages/Account/Login'
import Singup from '../Pages/Account/Singup'

import Member from '../Pages/TMETRIC_Pages/Member';
import { Homepage } from '../Pages/HomePage/Homepage';
import RequiredAuth from '../Pages/RequiredAuth/RequiredAuth';
import Time from '../Pages/TMETRIC_Pages/Time';
import MyWork from '../Pages/TMETRIC_Pages/MyWork';
import SlideTask from '../Pages/TMETRIC_Pages/SlideTask';
import Team from '../Pages/TMETRIC_Pages/Team';
import Project from '../Pages/TMETRIC_Pages/Manage/Project';
import Client from '../Pages/TMETRIC_Pages/Manage/Client';
import FullTask from '../Pages/Task/FullTask';
import TaskHeading from '../Pages/Task/TaskHeading';

function MainRoutes() {
    return (
        <>
            <Routes>

                <Route path='/login' element={<Login />} />
                <Route path='/singup' element={<Singup />} />



                <Route path='/' element={<Homepage />} />

                {/* 
                <Route
                    path='/sidebar'
                    element={
                        <RequiredAuth>
                        <SideBar />
                        </RequiredAuth>
                    }
                /> */}
                <Route path='/time' element={<Time />} />
                <Route path='/mywork' element={<MyWork />} />
                <Route path='/member' element={<Member />} />
                <Route path='/task' element={<SlideTask />} />
                <Route path='/team' element={<Team />} />
                


                {/* manage Routes */}

                <Route path='/project' element={<Project />} />
                <Route path='/client' element={<Client />} />

                <Route path='*' element={"Page Not Found"} />

            </Routes>
        </>

    )
}

export default MainRoutes
