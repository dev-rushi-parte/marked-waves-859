import { Box, Flex } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import SideBar from '../../component/SideBar';
import FullTask from '../Task/FullTask';
import Task from '../Task/Task';

import TaskHeading from '../Task/TaskHeading';

function SlideTask() {
    const sideSize = useSelector((state) => state.auth.sideSize);
    const [state, setState] = useState(true);
    const [taskD, setTaskD] = useState('');

    console.log(sideSize, "in Timer")

    return (
        <Flex>
            <Box>
                <SideBar />
            </Box>

            <Box transition={' 0.5s ease-in-out'} ml={sideSize == 'large' ? '180px' : "310px"} border='1px solid red' w='80%' h='2000px'>
                <TaskHeading setState={setState} state={state} />
                {
                    state ? <FullTask setState={setState} state={state} setTaskD={setTaskD} /> : <Task taskD={taskD} setState={setState} state={state} />
                }
                <Box transition={' 0.5s ease-in-out'}
                    ml={sideSize == 'large' ? '180px' : "300px"}
                    border='1px solid red' w='78%' mt='20px' h='auto'>
                    <Task />
                </Box>
            </Box>
        </Flex>
    )
}

export default SlideTask