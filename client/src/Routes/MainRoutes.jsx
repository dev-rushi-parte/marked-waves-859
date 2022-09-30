import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";

import Login from '../Pages/Account/Login'
import Singup from '../Pages/Account/Singup'

import { Homepage } from '../Pages/HomePage/Homepage';
import RequiredAuth from '../Pages/RequiredAuth/RequiredAuth';
import SlideTask from '../Pages/TMETRIC_Pages/SlideTask';
import SlideTime from '../Pages/TMETRIC_Pages/SlideTime';
import SlideMyWork from '../Pages/TMETRIC_Pages/SlideMyWork';

import SlideTeam from '../Pages/TMETRIC_Pages/SlideTeam';
import SlideProject from '../Pages/TMETRIC_Pages/SlideManage/SlideProject';
import SlideClient from '../Pages/TMETRIC_Pages/SlideManage/SlideClient';
import NewSideClient from '../Pages/TMETRIC_Pages/SlideManage/NewSideClient';
import SlideReports from '../Pages/TMETRIC_Pages/SlideAnalyze/SlideReports';
import SlideSubscription from '../Pages/TMETRIC_Pages/SlideWorkSpace/SlideSubscription';
import SlideMember from '../Pages/TMETRIC_Pages/SlideWorkSpace/SlideMember';


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
                <Route path='/time' element={<SlideTime />} />
                <Route path='/mywork' element={<SlideMyWork />} />
                <Route path='/task' element={<SlideTask />} />
                <Route path='/team' element={<SlideTeam />} />

                {/* analyze roues */}
                <Route path='reports' element={<SlideReports />} />


                {/* manage Routes */}

                <Route path='/project' element={<SlideProject />} />
                <Route path='/client' element={<SlideClient />} />
                <Route path='/client/new' element={<NewSideClient />} />

                {/* WorkSpace routes */}
                <Route path='/member' element={<SlideMember />} />
                <Route path='/subscribtion' element={<SlideSubscription />} />

                <Route path='*' element={"Page Not Found"} />

            </Routes>
        </>

    )
}

export default MainRoutes
