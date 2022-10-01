import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';
import { SiHeadspace } from "react-icons/si";
import styles from "./FullTask.module.css";
import { BsCheckCircle } from "react-icons/bs";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BsCaretRight } from "react-icons/bs";





const FullTask = ({setTaskD}) => {

  const arr = ["Project1", "Project2", "Project3", "Project4", "Project5", "Project6", "Project7", "Project8"];
  const pro = ["p1", "p2", "p3", "p4", "p5"];
  return (


    <div className={styles.fulltaskDiv}>
      <div>Project Name</div>
      <div>
        <Accordion className={styles.accordonDiv}>
          {
            pro.map((val) => {
              return <AccordionItem>
                <h2 >
                  <AccordionButton>
                    <AccordionIcon />
                    <div><SiHeadspace className={styles.fulltaskIcon} /></div>
                    <Box flex='1' textAlign='left'>
                      Section 1 title
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} >
                  {
                    arr.map((val, index) => (
                      <div className={styles.fulltaskAccordondiv}>
                        <div className={styles.fulltaskAccordonpanel}>
                          <div><BsCheckCircle className={styles.fulltaskicon} /></div>
                          <div >{val}</div>
                        </div>
                        <div className={styles.fulltaskAccordonpanel}>
                          <div><BsFillPersonPlusFill className={styles.fulltaskicon} /></div>
                          <div ><BsCaretRight className={styles.fulltaskicon} /></div>
                        </div>
                      </div>
                    ))
                  }
                </AccordionPanel>
              </AccordionItem>
            })
          }
          <div className={styles.accordonBottomDiv}> 
          <input type='text'  placeholder='You can add anything' 
          onChange={(e) => setTaskD(e.target.value)}/> 
          </div>
        </Accordion>
        
      </div>
    </div>
  )
}

export default FullTask;
