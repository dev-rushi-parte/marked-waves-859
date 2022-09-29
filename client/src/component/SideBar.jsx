import React, { useState } from 'react'

import {
    Flex,
    Text,
    IconButton,
    Divider,
    Avatar,
    Heading,
    Box,
    Img,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel
} from '@chakra-ui/react'

import { Link, NavLink } from 'react-router-dom'
import { BiChevronLeft } from "react-icons/bi";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { BsStopwatchFill } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { Side_Bar_Size } from '../Redux/AuthReducer/action';
import styled from './SideBar.module.css'
// import Member from './Member';
// import { useSelector } from 'react-redux';

import "./activeSide.css"
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
                w={navSize == "small" ? "0" : "240px"}
                flexDir="column"
                justifyContent="space-between"
            >
                <Flex
                    // p="5%"

                    zIndex='-10px'
                    flexDir="column"
                    w="100%"
                    // alignItems={navSize == "small" ? "center" : "flex-start"}
                    as="nav"

                >

                    {navSize === 'large' ? load ? "" : <Img p="5%" w='130px' ml='55px' mt='15px' src='/Imges/tmetric_logo_and_text.svg' alt='side bar tmrtric' /> : ""}

                    {/* Time */}
                    {navSize === 'large' ? <NavLink to='/time'>

                        <Flex pl="5%" mt='20px'>  <Box><BsStopwatchFill /></Box>  {load ? "" : "Time"}  </Flex>

                    </NavLink> : ""}

                    {/* My Work */}
                    {navSize === 'large' ? <NavLink to='/mywork'>
                        <Flex pl="5%" >  <Box><BsStopwatchFill /></Box> {load ? "" : "My Work"} </Flex>

                    </NavLink> : ""}


                    {/* Taks */}
                    {navSize === 'large' ? <NavLink to='/task'>
                        <Flex pl="5%" >  <Box><BsStopwatchFill /></Box>  {load ? "" : "Task"}  </Flex>
                    </NavLink> : ""}

                    {/* Team */}

                    {navSize === 'large' ? <NavLink to='/team'>
                        <Flex pl="5%" >  <Box><BsStopwatchFill /></Box>  <Box>{load ? "" : "Team"}</Box></Flex>

                    </NavLink> : ""}

                    <IconButton
                        background="none"
                        className={styled.IconChange}
                        position='fixed'
                        top='10px'
                        left='20px'
                        zIndex='100px'
                        mt={5}
                        _hover={{ background: 'none' }}
                        icon={navSize === 'large' ? <BiChevronLeft /> : <AiOutlineAlignLeft />}
                        onClick={IconBtn}
                    />


                    {/* Accodina=================================================== */}


                    {navSize === 'large' ? <Accordion  defaultIndex={[0]}  allowMultiple>
                        {load ? "" : <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        ANALYZE
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Report
                            </AccordionPanel>
                        </AccordionItem>}

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        MANAGE
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <NavLink to='/project'> <Box>Project</Box></NavLink>
                                <NavLink to='/client'> <Box>Client</Box></NavLink>
                            </AccordionPanel>
                        </AccordionItem>


                        {/* Work Space */}

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        WORKSPACE
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <NavLink to='/member'>members</NavLink>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion> : ""}







                    {/* {navSize === 'large' ? <Link to='/task'> {load ? "" : "Task"}  </Link> : ""} */}

                    {/* Member */}
                    {/* {navSize === 'large' ? <Link to='/member'>
                        <Box>{load ? "" : "Member"}</Box>
                    </Link> : ""} */}


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
