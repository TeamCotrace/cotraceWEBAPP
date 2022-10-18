import React from "react";
import { Flex,Stack, Text, Button,
  Box,
   
    IconButton,
    Collapse,
    Icon,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure, Avatar} from "@chakra-ui/react";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import {
  HamburgerIcon,
  CloseIcon,
  ArrowUpDownIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';

const Header_layout = () => {

const router = useRouter()
const {data: session} =  useSession();


const { isOpen, onToggle } = useDisclosure();



  const logout = () => {

    signOut({ redirect: true }).then(result => {
       
      router.push('/')
    });
}

  return (
    <Box>
    <Flex
      bg={useColorModeValue('white', 'gray.800')}
      color={useColorModeValue('gray.600', 'white')}
      minH={'60px'} width={"98vw"}
      py={{ base: 2 }}
      px={{ base: 2 }}
      borderBottom={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.900')}
      align={'center'}>
     
      <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
        <Text
          textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
          fontFamily={'heading'}
          color={useColorModeValue('gray.800', 'white')}>
          {session && session.user.email}
        </Text>

        {/* <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
         Desktop
        </Flex> */}
      </Flex>

      <Stack
        flex={{ base: 1, md: 0 }}
        justify={'flex-end'}
        direction={'row'}
        spacing={6}>
        
        <Button onClick={logout}        
          fontSize={'sm'}
          fontWeight={400}          
          >
          Sign Out
        </Button>

        <Link href={'/components/Users/addUser'}>
        <Button       
          fontSize={'sm'}
          fontWeight={400}          
          >
          Create User
        </Button>
      </Link>
      
         
      
     
      </Stack>
    </Flex>

   
    <Box>
  <Flex  bg={useColorModeValue('white', 'gray.800')}
      color={useColorModeValue('gray.600', 'white')}
      minH={'60px'} width={"100vw"}
      py={{ base: 2 }}
      px={{ base: 2 }}
      borderBottom={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.900')}
      align={'center'}>
      <Stack p={5} direction={'row'}>
      <Link href={'/'}><Button bg={'blue.400'} _hover={{bg:'red.500'}}>Dashboard</Button></Link>
      <Link href={'/components/Hotcars/list_hotcars'}><Button  bg={'blue.400'} _hover={{bg:'red.500'}}>Hot Cars</Button></Link>
      <Link href={'/'}><Button  bg={'blue.400'} _hover={{bg:'red.500'}}>Location</Button></Link>
      <Link href={'/components/Report/list_reported'}><Button  bg={'blue.400'} _hover={{bg:'red.500'}}>Reports</Button></Link>
      </Stack>




 
  </Flex>
  <Collapse in={isOpen} animateOpacity>
    <Flex direction={'column'}>
    <Link href={'/'}><Button  bg={'blue.400'} _hover={{bg:'red.500'}}>Menu</Button></Link>
     <Button bg={'blue.400'} _hover={{bg:'red.500'}}>Price</Button>
    </Flex>
     
    </Collapse>
</Box>


  </Box>
   









  
  );
};

export default Header_layout;
