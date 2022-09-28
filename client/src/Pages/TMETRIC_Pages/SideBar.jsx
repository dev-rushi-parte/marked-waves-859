import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    RadioGroup,
    useDisclosure,
    Button,
    Box,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function SideBar() {
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <>
            
            <RadioGroup defaultValue='left' >

            </RadioGroup>
            <Button colorScheme='blue' onClick={onOpen}>
                Open
            </Button>
            <Drawer placement='left' isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
                    <DrawerBody>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <Link to='/member'>
                            <Box>Member</Box>
                        </Link>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default SideBar
