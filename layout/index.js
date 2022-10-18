import {Flex,Box,VStack, StackDivider, Spacer,Grid} from "@chakra-ui/react"
// import List from "../pages/components/List";
import Header_layout from "../pages/components/Header";
import { useState } from "react";
import {useSession } from "next-auth/react";




const Layout = ({children}) =>{

  const {data:session} = useSession();

    return (

        
<Flex direction={'column'} px="4" py="4" >

<Box direction={'row'}>

  <Header_layout />


</Box>



<Flex direction={'row'}>
    

  <Box w='70vw' borderTopLeftRadius={20} borderTopRightRadius={20} px={2} py={2}>
  {children}
  </Box>
 


</Flex>
 
</Flex>
    )
}

export default Layout;