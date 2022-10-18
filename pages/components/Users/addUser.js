import Image from "next/image";
import { Flex, Box,Input,useDisclosure,Modal,ModalBody,ModalContent, ModalFooter,
  Button, InputGroup,InputLeftAddon, Center, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";
import { addData } from "../../../axios/users";

import { useSession } from "next-auth/react";



const AddUsers = () => {  
    const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [userlevel, setuserlevel] = useState(0);

  const [errorMessage, setErrorMessage] = useState(null);


   const router = useRouter()


  const signUpHandler = async (e) => {
    
    e.preventDefault();

 
    const payload = {email, password, userlevel}

     
    console.log('payload', payload)

    
    const result = await addData(payload);    

    if (result.hasError == true) {

      if (result.errorMessage.code == 10011) {

        console.log("Duplicate Email" );

      } else {

        setErrorMessage(result.errorMessage);
        
      }
    } else {

      setErrorMessage(result.result);

      router.push('/');
    }

    
  };

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    
 <Flex>



 <Button onClick={onOpen}>Add Users</Button>

<Modal isOpen={isOpen} onClose={onClose}>
  
  <ModalContent>
  <Box px={8}>
    <form onSubmit={signUpHandler}>        

        <Box px={2} py={2} fontSize={26} >Add Hotcars</Box>


       <Stack mt={5}>
         
       <InputGroup>
       <InputLeftAddon>Email</InputLeftAddon>

         <Input
           type="text"
           value={email}
           onChange={(e) => {setemail(e.target.value)}}
         />
        
       </InputGroup>

       <InputGroup>
       <InputLeftAddon>Password</InputLeftAddon>

         <Input
           type="text"
           value={password}
           onChange={(e) => {setpassword(e.target.value)}}
         />
        
       </InputGroup>
       

      
       </Stack>

    
    
       <ModalFooter>
       <Button type="submit">
        Save
       </Button>
       <Box w={5}></Box>
       <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
       </Button>
       </ModalFooter>


     
     </form>
    </Box>


 
  </ModalContent>
</Modal>
 </Flex>
  );
};
export default AddUsers;
