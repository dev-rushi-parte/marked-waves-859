import React, { useState } from 'react'

import {
    Flex,
    Text,
    IconButton,
    Divider,
    Avatar,
    Heading,
    Box
} from '@chakra-ui/react'

import { Link } from 'react-router-dom'
import { BiChevronLeft } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { Side_Bar_Size } from '../Redux/AuthReducer/action';
// import Member from './Member';
// import { useSelector } from 'react-redux';

function SideBar() {
    const [navSize, changeNavSize] = useState("large");
    const [load, setLoad] = useState(false);

    const dispatch = useDispatch();



    const IconBtn = () => {
        if (navSize === "small") {
            changeNavSize("large")
            // console.log(navSize)
            dispatch(Side_Bar_Size(navSize))
            setLoad(true)
            setTimeout(() => {
                setLoad(false);
            }, 400)
        }

        else {
            changeNavSize("small")
            dispatch(Side_Bar_Size(navSize))
        }
    }

    return (

        <>


            <Flex
                position="fixed"
                h="750px"
                bg='rgb(246,247,248)'
                boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
                transition={' 0.5s ease-in-out'}
                w={navSize == "small" ? "0" : "250px"}
                flexDir="column"
                justifyContent="space-between"
            >
                <Flex
                    p="5%"

                    zIndex='-10px'
                    flexDir="column"
                    w="100%"
                    // alignItems={navSize == "small" ? "center" : "flex-start"}
                    as="nav"

                >


                    {navSize === 'large' ? <Link to='/member'><Box mt='100px'>{load ? "" : "Member"}</Box> </Link> : ""}
                    {navSize === 'large' ? <Link to='/time'>   {load ? "" : "Time"}   </Link> : ""}
                    {navSize === 'large' ? <Link to='/mywork'>   {load ? "" : "My Work"}  </Link> : ""}
                    {navSize === 'large' ? <Link to='/task'> {load ? "" : "Task"}  </Link> : ""}
                    {/* {navSize === 'large' ? <Box>Hi i'm just checking</Box> : ""} */}


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
                        onClick={IconBtn}
                    />
                </Flex>

                {navSize === 'large' ? load ? "" : <Flex
                    p="5%"
                    flexDir="column"
                    w="100%"
                    // alignItems={navSize == "small" ? "center" : "flex-start"}
                    mb={4}>
                    <Divider display={navSize == "small" ? "none" : "flex"} />

                    <Flex mt={4} >
                        <Avatar size="sm" src="avatar-1.jpg" />
                        <Flex flexDir="column" ml={4}

                        // display={navSize == "small" ? "none" : "flex"}
                        >

                            <Heading as="h3" size="sm">Sylwia Weller</Heading>

                            <Text color="gray">Admin</Text>
                        </Flex>
                    </Flex>
                </Flex> : ""}


            </Flex>

        </>
    )
}

export default SideBar
