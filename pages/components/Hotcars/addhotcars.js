import Image from "next/image";
import { Flex, Box,Input,useDisclosure,Modal,ModalBody,ModalContent, ModalFooter,
  Button, InputGroup,InputLeftAddon, Center, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";
import { addEmployee } from "../../../axios_con/employee_request";
import { useSession } from "next-auth/react";



const Add_employee = () => {
  
  const [pnumber, setpnumber] = useState("");
  const [typeV, settypeV] = useState("");
  const [userId, setuserId] = useState("")

  const {data: session} =  useSession();

 
  const router = useRouter();




  const signUpHandler = async (e) => {
    
    e.preventDefault();

 
    const payload = {pnumber, hotcars,userId:session.user._id }

     
    console.log('payload', payload)

    
    const result = await addEmployee(payload);    

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
 <>sdf</>
  );
};
export default Add_employee;
