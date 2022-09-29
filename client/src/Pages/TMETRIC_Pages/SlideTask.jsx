import { Box, Flex } from '@chakra-ui/react';
import React from 'react'
import { useSelector } from 'react-redux';
import SideBar from '../../component/SideBar';
import Task from "../Task/Task"

function SlideTask() {
    const sideSize = useSelector((state) => state.auth.sideSize);

    console.log(sideSize, "in Timer")

    return (
        <Flex>
            <Box>
                <SideBar />
            </Box>

            <Box transition={' 0.5s ease-in-out'} ml={sideSize == 'large' ? '180px' : "310px"} border='1px solid red' w='80%' h='2000px'>
            <Task />
            </Box>

        </Flex>
    )
}

export default SlideTask