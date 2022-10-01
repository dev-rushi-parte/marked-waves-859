import { Box, Button, Flex, Input, Select, Text , Menu, MenuButton, MenuList, MenuItem, Link} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { IoMdAdd } from 'react-icons/io'
import styles from "../Projects/Project.module.css"
// import {HiOutlineSearch} from "react-icons/hi"
import { BsThreeDots } from 'react-icons/bs';

const Project = () => {
    const [data,setData] = useState([])

    const getdata=()=>{
      fetch("http://localhost:8080/project/",{
        method:"GET"
      })
      .then((res)=>res.json())
      .then((res)=>setData(res))
      .catch((err)=>console.log(err))
    }
  
    useEffect(()=>{
      getdata()
    },[])
    console.log(data)


    const handleDelete=(id)=>{
        fetch(`http://localhost:8080/project//${id}`,{
         method:"DELETE",
        })
        .then((res)=>res.json())
        .then(()=>getdata())
        .catch((err)=>{
         console.log(err)
        })
       }
  return (
   
    <Box>
    
    <Box className={styles.NewProjectMainBox}>
   

   <Text fontSize={22} letterSpacing="1px" fontWeight={500}>Projects</Text>

   {/* ALL SELECT BOX  */}

   <Box className={styles.Inputmerge}>
   
   <Select  w="10%" h="38%">
   <option value="Client:All" >Client:All</option>
    <option value="Option 1" >Option 1</option>
   </Select>

   <Select placeholder="Status : Active or Done" w="20%" h="38%">
    <option value="Option 1" >Option 1</option>
   </Select>


   <Select placeholder="Billing : Any" w="12%" h="38%">
    <option value="Option 1" >Option 1</option>
   </Select>


   <Select placeholder="Budget : Any" w="12%" h="38%">
    <option value="Option 1" >Option 1</option>
   </Select>

   </Box>

   {/* ALL SELECT BOX END */}



   {/* gray Box */}
   <Box className={styles.ProjectGrayBox}>


   <Box className={styles.ClientBtnBox}>

    <Box>
  <Link to="project/new"><Button className={styles.ClientBtn} bg="#3070f0" color="white" h="33px"><IoMdAdd size={24}/>New Project</Button></Link>
   </Box>

   <Box>
    <Flex>
     {/* <Text> {data.length} projects </Text> */}
   <Input placeholder='Search'/>
    </Flex>
   </Box>
   </Box>

   </Box>
    {/* Gray Box End */}



      {/* Sorting Box */}
  <Box className={styles.sortingBox}>
   


   <Box className={styles.sortingFirstBox}>
    <Text color='gray' fontWeight={500} fontSize="14px">PROJECT</Text>
   </Box>
   <Box className={styles.sortingSecBox}>
    <Text color='gray' fontWeight={500} fontSize="14px">CODE</Text>
   </Box>
   <Box className={styles.sortingThirBox}>
    <Text color='gray' fontWeight={500} fontSize="14px">CLIENT</Text>
   </Box>
   <Box className={styles.sortingForthBox}>
    <Text color='gray' fontWeight={500} fontSize="14px">BILLABLE AMOUNT</Text>
   </Box>
   <Box className={styles.sortingFirftBox}>
    <Text color='gray' fontWeight={500} fontSize="14px">TEAM</Text>
   </Box>

  </Box>
  {/* Sorting Box End */}

   
   {data?.map((el,i)=>(
    <Box className={styles.mapBox} key={el._id}>

        <Box className={styles.sortingFirstBox}>
        <img src="https://services.tmetric.com/storage/Content/Avatars/project.svg" alt="" className={styles.image}/>
            {el.project}</Box>
         <Box className={styles.sortingSecBox}>{el.code}</Box>
         <Box className={styles.sortingThirBox}>
         <img src="https://services.tmetric.com/storage/Content/Avatars/client.svg" alt="" className={styles.image}/>
            {el.client}</Box>
          <Box className={styles.sortingForthBox}>{el.amount} {el.currency}</Box>
          <Box className={styles.sortingFirftBox}>No Team</Box>
          <Box className={styles.menuBox}>
          <Menu>
  <MenuButton >
   <BsThreeDots/>
  </MenuButton>
  <MenuList>
    <MenuItem>Edit</MenuItem>
    <MenuItem onClick={()=>handleDelete(el._id)}>Delete</MenuItem>
  </MenuList>
</Menu>
          </Box>
        </Box>
   ))}


    </Box>

    </Box>
  )
}

export default Project