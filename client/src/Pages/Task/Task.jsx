import React,{useState} from 'react';
import styles from "./Task.module.css";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Select,
} from '@chakra-ui/react';

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'

import { SiHeadspace } from "react-icons/si"
import { BsFillTrashFill } from "react-icons/bs";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { TbAlarm } from "react-icons/tb";
import { AiFillTag } from "react-icons/ai";
import { AiFillSignal } from "react-icons/ai";
import { AiTwotonePlayCircle } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import FullTask from './FullTask';
import { Box } from "@chakra-ui/react";


const Task = ({ state, setState }) => {

    const taskChangeState = () => {
        setState(!state);
    }

    const assigne = ['Ravi', "Shakti", "Akshay", "Aadil"];
    const project = ["project1" , "project2" , "project3" , "project4" , "project5"];

    const [taskData , setTaskData] = useState({
        taskName : "" ,
        projectName : "",
        assigneName : "",
        dueDate: "",
        taskDescription : "",
        estimateTime : "",
        tag: ""
    })


    const addData = (e) => {
        console.log(e.target.value)
    }

    return (

        <div className={styles.top}>
            {  /* Project Section  */}
            <div className={styles.taskProject}>

                {  /* ProjectLeft Section    */}
                <div className={styles.taskProjectLeft}>
                    <FullTask />
                </div>

                { /* ProjectRight Section */}
                <div className={styles.taskProjectRight}>
                    <div className={styles.taskUp}>
                        <div className={styles.taskUpLeft}>
                            <div><AiTwotonePlayCircle /></div>
                            <div className={styles.taskMarkComplete}>
                                <div><AiOutlineCheck /></div>
                                <div>Mark Complete</div>
                            </div>
                        </div>
                        <div className={styles.taskUpRight}>

                            <Menu>
                                <MenuButton >
                                    <FiMoreHorizontal />
                                </MenuButton>
                                <MenuList>
                                    <MenuItem> <BsFillTrashFill className={styles.deleteicon} /> Delete</MenuItem>
                                </MenuList>
                            </Menu>

                            <div><button onClick={taskChangeState}><FiArrowRight /></button></div>
                        </div>
                    </div>



                        { /* Map Project Data */ }
                    <div><input placeholder='Write Task Here' type='text' /></div>
                    <div className={styles.projectRightDiv}>
                        <div><p>Project</p></div>
                        <div className={styles.projectRightDivBelow}>
                            <div><SiHeadspace className={styles.projectRightDivIcon} /></div>
                            
                            <div>
                                <Select onChange={addData}>

                                    {
                                        project.map((val) => {
                                            return <option value={val} >{val}</option>
                                        })
                                    }

                                </Select>
                            </div>

                        </div>
                    </div>


                    { /* Map Assign Data */ }
                    <div className={styles.projectRightDiv}>
                        <div><p>Assigne</p></div>
                        <div className={styles.projectRightDivBelow}>
                            <div><BsFillPersonPlusFill className={styles.projectRightDivIcon} />

                            </div>
                            <div>
                                <Select onChange={addData}>

                                    {
                                        assigne.map((val) => {
                                            return <option value={val}>{val}</option>
                                        })
                                    }

                                </Select>
                            </div>
                        </div>
                    </div>

                    <div className={styles.projectRightDiv}>
                        <div>Due Date</div>
                        <div className={styles.projectRightDivBelow}>
                            <div><BsFillCalendarDateFill className={styles.projectRightDivIcon} />
                            
                            </div>
                            <div><input type="date" placeholder='Choose Date' name='dueDate'/></div>
                        </div>
                    </div>

                    <div>
                        <input placeholder='Enter task description' />
                    </div>

                    <div className={styles.projectRightDiv}>

                        <div>Estimate</div>
                        <div className={styles.projectRightDivBelow}>
                            <div><TbAlarm className={styles.projectRightDivIcon} /></div>
                            <div><input type='text' /></div>
                        </div>
                    </div>

                    <div>
                        <div className={styles.projectRightDivBelow}>
                            <div><AiFillTag className={styles.projectRightDivIcon} /></div>
                            <div>
                                <select >
                                    <option value='Add-Tags'>Add-Tags</option>
                                    <option value='Design'>Design</option>
                                    <option value='Development'>Development</option>
                                    <option value='Testing'>Testing</option>
                                    <option value='Implementation'>Implementation</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className={styles.projectRightDivBelow}>
                            <div><AiFillSignal className={styles.projectRightDivIcon} /></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Task
