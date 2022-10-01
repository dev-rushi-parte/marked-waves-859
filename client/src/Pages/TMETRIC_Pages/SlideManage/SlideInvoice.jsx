import { Box, Flex } from '@chakra-ui/react';
import React from 'react'
import { useSelector } from 'react-redux';
import SideBar from '../../../component/SideBar';
import AkayClient from '../../Client/AkayClient';
import { Invoice } from '../../Invoice/Invoice';

function SlideInvoice() {
    const sideSize = useSelector((state) => state.auth.sideSize);

    console.log(sideSize, "in Timer")

    return (
        <Flex>
            <Box>
                <SideBar />
            </Box>

            <Box transition={' 0.5s ease-in-out'}
                ml={sideSize == 'large' ? '180px' : "300px"}
                w='80%' mt='20px' h='auto'>

                <Invoice />
            </Box>

        </Flex>
    )
}

export default SlideInvoice