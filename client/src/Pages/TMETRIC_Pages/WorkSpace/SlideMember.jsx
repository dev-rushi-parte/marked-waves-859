import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import SideBar from '../../../component/SideBar'


function SlideMember() {

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

                <Box transition={' 0.5s ease-in-out'}
                ml={sideSize == 'large' ? '180px' : "300px"}
                border='1px solid red' w='78%' mt='20px' h='auto'>
                    <h1>Member</h1>
                </Box>

            </Flex>
        </div>
    )
}

export default SlideMember
