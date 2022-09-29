import { Box, Flex } from '@chakra-ui/react';
import React from 'react'
import { useSelector } from 'react-redux';
import SideBar from '../../../component/SideBar';

function Client() {
    const sideSize = useSelector((state) => state.auth.sideSize);

    console.log(sideSize, "in Timer")

    return (
        <Flex>
            <Box>
                <SideBar />
            </Box>

            <Box transition={' 0.5s ease-in-out'} ml={sideSize == 'large' ? '180px' : "310px"} border='1px solid red' w='50%' h='2000px'>

                <h1>Client</h1>
            </Box>

        </Flex>
    )
}

export default Client