import React from 'react';
import styles from "./Task.module.css";
import { SiHeadspace } from "react-icons/si"
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { TbAlarm } from "react-icons/tb";
import { AiFillTag } from "react-icons/ai";
import { AiFillSignal } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { BiX } from "react-icons/bi";
import { BiSearchAlt2 } from "react-icons/bi";
import { Button } from '@chakra-ui/react';

const Task = () => {
    return (
        <div className={styles.top}>

            {    /* heading  */}
            <div className={styles.taskHeading}>
                <h1>My Tasks</h1>
                <div className={styles.taskHeadingDiv}>
                    <div>Assigne Task</div>
                    <div><BiChevronDown className={styles.headingDivIcon} /></div>
                </div>
            </div>

            {  /* Filter Section */}
            <div className={styles.taskFilter}>
                <div className={styles.filterDiv}>
                    <div>Client:All</div>
                    <div><BiChevronDown className={styles.filterDivIcon} /></div>
                </div>

                <div className={styles.filterDiv}>
                    <div>Project</div>
                    <div><BiChevronDown className={styles.filterDivIcon} /></div>
                </div>

                <div className={styles.filterDiv}>
                    <div>Tag:All</div>
                    <div><BiChevronDown className={styles.filterDivIcon} /></div>
                </div>

                <div className={styles.filterDiv}>
                    <div>Status:Open</div>
                    <div><BiChevronDown className={styles.filterDivIcon} /></div>
                </div>

                <div className={styles.filterDiv}>
                    <div>Creator:Any</div>
                    <div><BiChevronDown className={styles.filterDivIcon} /></div>
                </div>


                <div className={styles.filterDiv}>
                    <div>Source:Internal</div>
                    <div><BiChevronDown className={styles.filterDivIcon} /></div>
                </div>

                <div className={styles.filterDiv}>
                    <div><BiX className={styles.filterDivIcon} /></div>
                    <div>Clear Filter</div>
                </div>
            </div>

            { /* New Task Section  */}
            <div className={styles.newTask}>
                <div className={styles.newTaskInside}>

                    <div className={styles.taskDiv}>
                        <div><Button>New Task</Button></div>
                        <div><BiChevronDown className={styles.filterDivIcon} /></div>
                    </div>

                    <div className={styles.taskDiv}>
                        <div>Sort: Project</div>
                        <div><BiChevronDown className={styles.filterDivIcon} /></div>
                    </div>

                </div>
                <div className={styles.taskInput}>
                    <div><BiSearchAlt2 className={styles.filterDivIcon}/></div>
                    <div>
                        <input type="text" placeholder='Search' />
                    </div>
                </div>
            </div>

            {  /* Project Section  */}
            <div className={styles.taskProject}>

                {  /* ProjectLeft Section    */}
                <div className={styles.taskProjectLeft}>
                    <div>
                        <div ><img /></div>
                        <div><h3>Project Name</h3></div>
                    </div>
                </div>
                <div className={styles.taskProjectRight}>
                    <h1>Project Name</h1>
                    <div className={styles.projectRightDiv}>
                        <div><p>Project</p></div>
                        <div className={styles.projectRightDivBelow}>
                            <div><SiHeadspace className={styles.projectRightDivIcon} /></div>
                            <div>project Name</div>
                        </div>
                    </div>

                    <div className={styles.projectRightDiv}>
                        <div><p>Assigne</p></div>
                        <div className={styles.projectRightDivBelow}>
                            <div><BsFillPersonPlusFill className={styles.projectRightDivIcon} /></div>
                            <div>Ravi</div>
                        </div>
                    </div>

                    <div className={styles.projectRightDiv}>
                        <div>Due Date</div>
                        <div className={styles.projectRightDivBelow}>
                            <div><BsFillCalendarDateFill className={styles.projectRightDivIcon} /></div>
                            <div>project Name</div>
                        </div>
                    </div>

                    <div>
                        <input placeholder='Enter task description' />
                    </div>

                    <div className={styles.projectRightDiv}>

                        <div>Estimate</div>
                        <div className={styles.projectRightDivBelow}>
                            <div><TbAlarm className={styles.projectRightDivIcon} /></div>
                            <div>project Name</div>
                        </div>
                    </div>

                    <div>
                        <div className={styles.projectRightDivBelow}>
                            <div><AiFillTag className={styles.projectRightDivIcon} /></div>
                            <div><input type='text' placeholder='Add Tags' /></div>
                        </div>
                    </div>

                    <div>
                        <div className={styles.projectRightDivBelow}>
                            <div><AiFillSignal className={styles.projectRightDivIcon} /></div>
                            <div>project Name</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Task
