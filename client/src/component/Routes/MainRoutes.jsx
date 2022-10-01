import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";

import Login from '../../Pages/Account/Login'
import Singup from '../../Pages/Account/Singup'

import { Homepage } from '../../Pages/HomePage/Homepage';
import SlideTask from '../../Pages/TMETRIC_Pages/SlideTask';
// import Team from '../Pages/TMETRIC_Pages/Team';
// import Project from '../Pages/TMETRIC_Pages/Manage/Project';
// import Client from '../Pages/TMETRIC_Pages/Manage/Client';
// import FullTask from '../Pages/Task/FullTask';
// import TaskHeading from '../Pages/Task/TaskHeading';
import SlideTime from '../../Pages/TMETRIC_Pages/SlideTime';
import SlideMyWork from '../../Pages/TMETRIC_Pages/SlideMyWork';

import SlideTeam from '../../Pages/TMETRIC_Pages/SlideTeam';
import SlideProject from '../../Pages/TMETRIC_Pages/SlideManage/SlideProject';
import SlideClient from '../../Pages/TMETRIC_Pages/SlideManage/SlideClient';
import NewSideClient from '../../Pages/TMETRIC_Pages/SlideManage/NewSideClient';
import SlideReports from '../../Pages/TMETRIC_Pages/SlideAnalyze/SlideReports';
import SlideSubscription from '../../Pages/TMETRIC_Pages/SlideWorkSpace/SlideSubscription';
import SlideMember from '../../Pages/TMETRIC_Pages/SlideWorkSpace/SlideMember';
import Price from '../../Pages/Price/Price';
import SlideInvoice from '../../Pages/TMETRIC_Pages/SlideManage/SlideInvoice';
import SideBar from '../SideBar';
import NewProject from '../../Pages/Projects/NewProject';



function MainRoutes() {
    return (
        <>
            <Routes>

                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Singup />} />



                <Route path='/' element={<Homepage />} />
                <Route path='/Price' element={<Price />} />

                {/* <Route path='/team' element={<Team />} /> */}

                <Route path='sidebar' element={<SideBar />} >

                    {/* Top routes */}
                    <Route path='time' element={<SlideTime />} />
                    <Route path='mywork' element={<SlideMyWork />} />
                    <Route path='team' element={<SlideTeam />} />
                    <Route path='task' element={<SlideTask />} />


                    {/* analyze roues */}

                    <Route path='reports' element={<SlideReports />} />



                    {/* manage Routes */}
                    <Route path='project' element={<SlideProject />} />
                    <Route path='project/new' element={<NewProject/>}/>
                    <Route path='client' element={<SlideClient />} />
                    <Route path='client/new' element={<NewSideClient />} />
                    <Route path='invoice' element={<SlideInvoice />} />

                    {/* WorkSpace routes */}

                    <Route path='member' element={<SlideMember />} />
                    <Route path='subscribtion' element={<SlideSubscription />} />


                    <Route path='*' element={"Page Not Found"} />
                </Route>

                {/* <Route path='/member' element={<RequiredAuth> <SlideMember />  </RequiredAuth>} /> */}

                <Route path='*' element={"Page Not Found"} />

            </Routes>
        </>

    )
}

export default MainRoutes
