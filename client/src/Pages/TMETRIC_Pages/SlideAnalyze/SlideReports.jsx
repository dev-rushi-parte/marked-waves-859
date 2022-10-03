import { Box, Flex } from '@chakra-ui/react';
import React from 'react'
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import SideBar from '../../../component/SideBar';
import { DetailedReports } from '../../Reports/DetailedReports';

function SlideReports() {
    const sideSize = useSelector((state) => state.auth.sideSize);

    console.log(sideSize, "in Timer")

    return (
        <Flex>


            <Box transition={' 0.5s ease-in-out'}
                ml={sideSize == 'large' ? '180px' : "300px"}
                w='100%' mr='50px' mt='20px' h='auto'>



                <DetailedReports />
                <Outlet />
            </Box>

        </Flex>
    )
}

export default SlideReports