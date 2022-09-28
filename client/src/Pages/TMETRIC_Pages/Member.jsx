import React from 'react'
import { useSelector } from 'react-redux'
import SideBar from './SideBar'

function Member() {

    const token = useSelector((state) => state.auth.token)
    const isAuth = useSelector((state) => state.auth.isAuth)
    console.log(isAuth)
    console.log(token)
    return (
        <div>
            {/* <SideBar /> */}
            <h1>Member</h1>
        </div>
    )
}

export default Member
