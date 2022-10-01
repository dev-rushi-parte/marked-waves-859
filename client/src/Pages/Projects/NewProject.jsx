import { Box, Button, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import styles from "../Projects/NewProject.module.css"
import { IoMdArrowRoundBack  } from "react-icons/io";
import General from './General';
import Billing from './Billing';
import Budget from './Budget';
import WorkType from './Worktype';
import Team from './Team';
import {Link} from "react-scroll"



const NewProject = () => {
  const[project,setproject] = useState()
  const[code,setcode] = useState()
  const[amount,setamount] = useState()
  const[currency,setcurrency] = useState()
  const[hourly,sethourly] = useState()
  const[freetype,setfreetype] = useState()
  const[freeRecurr,setfreeRecurr] = useState()

  const[client,setClient] = useState()


  const handleSubmit=()=>{
    const payload ={project,code,amount,currency,hourly,freetype,freeRecurr ,client}
    fetch("http://localhost:8080/project/new" ,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(payload)
    })
    .then((res)=>res.json())
    alert("DONE")
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
}


  return (
    <Box>
    
    <Box className={styles.NewProjectMainBox}>
     
   {/* Back Button Box */}
    <Box className={styles.NewClientarrowBox}>
   
   <IoMdArrowRoundBack size={24} className={styles.arrow}/>

   <Text fontSize="26px" fontWeight="semibold">
   New Project
   </Text>

   </Box>

   {/* Back Button Box End */}

   
   {/* New Project Box Inside Gray Box */}
   <Box className={styles.NewProjInBox}>
   

     <Box className={styles.LeftStaticBox}>

      <Link to="general" spy={true} smooth={true}><Text className={styles.StaticSha}>General</Text>  </Link> 
      <Text className={styles.StaticSha}>Billing</Text>  
      <Link to="budget" spy={true} smooth={true}> <Text className={styles.StaticSha}>Budget</Text> </Link>
     <Text className={styles.StaticSha}>Work Types</Text> 
     <Text className={styles.StaticSha}>Team</Text> 
    
   </Box>

   <Box className={styles.RightScrollBox}>
  
  <General setproject={setproject} setcode={setcode} setClient={setClient}/>
  <Billing setamount={setamount} setcurrency={setcurrency} sethourly={sethourly}
   setfreetype={setfreetype} setfreeRecurr={setfreeRecurr} 
  />
  <Budget/>
  <WorkType/>
  <Team/>
   
   </Box>
   </Box>

   <Button onClick={handleSubmit}>SAVE</Button>
    </Box>









    </Box>
  )
}

export default NewProject