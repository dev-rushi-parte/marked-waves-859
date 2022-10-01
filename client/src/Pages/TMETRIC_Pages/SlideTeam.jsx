import { Box, Flex } from '@chakra-ui/react';
import React from 'react'
import { useSelector } from 'react-redux';
import SideBar from '../../component/SideBar';
import { Team } from '../Team/Team';

function SlideTeam() {
    const sideSize = useSelector((state) => state.auth.sideSize);



    return (
        <Flex>
            <Box>
                <SideBar />
            </Box>

            <Box transition={' 0.5s ease-in-out'}
                ml={sideSize == 'large' ? '180px' : "300px"}
                border='0.5px solid lightgray' w='78%' mt='20px' h='auto'>

                <Team/>
            </Box>

        </Flex>
    )
}

export default SlideTeam