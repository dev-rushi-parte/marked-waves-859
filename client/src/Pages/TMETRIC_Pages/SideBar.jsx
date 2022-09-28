import React, { useState } from 'react'

import {
    Flex,
    Text,
    IconButton,
    Divider,
    Avatar,
    Heading
} from '@chakra-ui/react'

import { Link } from 'react-router-dom'
import { BiChevronLeft } from "react-icons/bi";
import Member from './Member';
import { useSelector } from 'react-redux';

function SideBar() {
    const [navSize, changeNavSize] = useState("large")

    

    return (

        <>


            <Flex
                pos="sticky"
                h="750px"
                bg='rgb(246,247,248)'
                boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
                w={navSize == "small" ? "0px" : "200px"}
                flexDir="column"
                justifyContent="space-between"
            >
                <Flex
                    p="5%"

                    zIndex='-10px'
                    flexDir="column"
                    w="100%"
                    alignItems={navSize == "small" ? "center" : "flex-start"}
                    as="nav"
                    transition='0.10s easy-in-out'

                >


                    <Link to='/member'>
                        Member</Link>

                    <IconButton
                        background="none"

                        position='fixed'
                        top='10px'
                        left='20px'
                        zIndex='100px'
                        mt={5}
                        border='1px solid black'
                        _hover={{ background: 'none' }}
                        icon={<BiChevronLeft />}
                        onClick={() => {
                            if (navSize == "small")
                                changeNavSize("large")
                            else
                                changeNavSize("small")
                        }}
                    />
                </Flex>

                <Flex
                    p="5%"
                    flexDir="column"
                    w="100%"
                    alignItems={navSize == "small" ? "center" : "flex-start"}
                    mb={4}
                >
                    <Divider display={navSize == "small" ? "none" : "flex"} />
                    <Flex mt={4} align="center">
                        <Avatar size="sm" src="avatar-1.jpg" />
                        <Flex flexDir="column" ml={4} display={navSize == "small" ? "none" : "flex"}>
                            <Heading as="h3" size="sm">Sylwia Weller</Heading>
                            <Text color="gray">Admin</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>

        </>
    )
}

export default SideBar
