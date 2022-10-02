import { Box, Flex } from '@chakra-ui/react';
import React, { useState , useEffect} from 'react'
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import FullTask from '../Task/FullTask';
import Task from '../Task/Task';

import TaskHeading from '../Task/TaskHeading';

function SlideTask() {
    const sideSize = useSelector((state) => state.auth.sideSize);
    const [state, setState] = useState(true);
    const [taskD, setTaskD] = useState('');
    const [projects, setProjects] = useState([]);
    const token = useSelector((state) => state.auth.token)



    const getProjects = () => {
        fetch('http://localhost:8080/project', {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res, "projectdata");
                setProjects(res);
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getProjects();
    }, []);
    console.log(projects);


    console.log(sideSize, "in Timer")

    return (
        <Flex>


            <Box transition={' 0.5s ease-in-out'}
                ml={sideSize == 'large' ? '180px' : "300px"}
                border='1px solid red' w='100%' mr='50px' mt='20px' h='auto'>



                <TaskHeading setState={setState} state={state} />
                {
                    state ? <FullTask setState={setState} state={state} setTaskD={setTaskD} projects={projects} /> : <Task taskD={taskD} setState={setState} state={state} projects={projects} />
                }
                <Outlet />
            </Box>

        </Flex>
    )
}

export default SlideTask