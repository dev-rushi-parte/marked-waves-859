import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import SideBar from '../../component/SideBar'


function Member() {

    const token = useSelector((state) => state.auth.token)
    const isAuth = useSelector((state) => state.auth.isAuth)
    console.log(isAuth)
    console.log(token)

    const sideSize = useSelector((state) => state.auth.sideSize);

    return (
        <div>
            <Flex>
                <Box>
                    <SideBar />
                </Box>

                <Box transition={' 0.5s ease-in-out'} ml={sideSize == 'large' ? '0px' : "250px"} border='1px solid red' w='50%' h='2000px'>
                    <h1>Member</h1>
                </Box>

            </Flex>
        </div>
    )
}

export default Member
