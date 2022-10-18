import Image from "next/image";
import { Flex, Box,Input,useDisclosure,Modal,ModalBody,ModalContent, ModalFooter,
  Button, InputGroup,InputLeftAddon, Center, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";
import { addhotcars } from "../../../axios/hotcars";
import { useSession } from "next-auth/react";



const Addhotcars = () => {  
    const [pnumber, setpnumber] = useState("");
  const [typeV, settypeV] = useState("");
  const [userId, setuserId] = useState("634e86ad8b3a310a0652fcc6");
  const [errorMessage, setErrorMessage] = useState(null);


   const router = useRouter()


  const signUpHandler = async (e) => {
    
    e.preventDefault();

 
    const payload = {pnumber, typeV, userId}

     
    console.log('payload', payload)

    
    const result = await addhotcars(payload);    

    if (result.hasError == true) {

      if (result.errorMessage.code == 10011) {

        console.log("Duplicate Plate Number" );

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
 {/* {console.log(session.user._id)} */}
 <Button onClick={onOpen}>Add Hot Cars</Button>

<Modal isOpen={isOpen} onClose={onClose}>
  
  <ModalContent>
  <Box px={8}>
    <form onSubmit={signUpHandler}>        

        <Box px={2} py={2} fontSize={26} >Add Hotcars</Box>


       <Stack mt={5}>
         
       <InputGroup>
       <InputLeftAddon>Plate Number</InputLeftAddon>

         <Input
           type="text"
           value={pnumber}
           onChange={(e) => {setpnumber(e.target.value)}}
         />
        
       </InputGroup>

       <InputGroup>
       <InputLeftAddon>Vehicles Type</InputLeftAddon>

         <Input
           type="text"
           value={typeV}
           onChange={(e) => {settypeV(e.target.value)}}
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
export default Addhotcars;
