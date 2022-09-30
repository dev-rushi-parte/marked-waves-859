import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import SideBar from '../../component/SideBar'
import Time from '../Time/Time';

function SlideTime() {

    const sideSize = useSelector((state) => state.auth.sideSize);

    console.log(sideSize, "in Timer")

    return (
        <Flex>
            <Box>
                <SideBar />
            </Box>

            <Box transition={' 0.5s ease-in-out'}
                ml={sideSize == 'large' ? '180px' : "300px"}
                w='78%' mt='20px' h='auto'>

                <Time />
            </Box>

        </Flex>
    )
}

export default SlideTime