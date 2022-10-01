import { SearchIcon } from '@chakra-ui/icons'
import { Box, Input, InputGroup, InputLeftElement, Spacer, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'

export const Team = () => {

    const data = useSelector((store) => store.member.memberData)

    console.log(data);

  return (
    <Box>
        <Box>
            All
        </Box>

        <Box h={"500px"} border={"0.5px solid lightgray"} mt={"10px"}>

            <Box>
                <InputGroup  htmlSize={2} width='40%' >
                    <InputLeftElement
                        pointerEvents='none'
                        children={<SearchIcon color='black' />}
                    />
                    <Input border={"0.5px solid lightgray"} borderRadius={"10px 10px 10px 10px"} type='search' placeholder='Search member' />
                </InputGroup>
            </Box>

            <Box>
                <TableContainer textAlign={"left"} >
                    <Table variant='striped' colorScheme='teal'>
                        <Thead>
                        <Tr >
                                <Th>Status</Th>
                                <Th>User</Th>
                                <Th textAlign={"left"} border={"1px solid black"} isNumeric>Started At</Th>
                                <Th textAlign={"left"} border={"1px solid black"} isNumeric>Finished At</Th>
                                <Th textAlign={"left"} border={"1px solid black"} isNumeric>Total Time Today</Th>
                                <Th textAlign={"left"} border={"1px solid black"} isNumeric>Current Task</Th>
                        </Tr>
                        </Thead>
                        <Tbody>
                        <Tr >
                            <Td>Status</Td>
                            <Td>User</Td>
                            <Td textAlign={"left"} border={"1px solid black"} isNumeric>multiply by</Td>
                            <Td textAlign={"left"} border={"1px solid black"} isNumeric>multiply by</Td>
                            <Td textAlign={"left"} border={"1px solid black"} isNumeric>multiply by</Td>
                            <Td textAlign={"left"} border={"1px solid black"} isNumeric>multiply by</Td>
                        </Tr>
                        </Tbody>
                        
                    </Table>
                </TableContainer>
            </Box>

                        
        </Box>

    </Box>
  )
}
