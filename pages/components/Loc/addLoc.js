import React from "react";
import { useState } from "react";
import {add_location }from "../../../axios/location"
import {Box, Button, Input, Flex, InputGroup, InputLeftAddon, Stack} from "@chakra-ui/react"
import { useRouter } from "next/router";



const Add_latlong = ({lat, lng, rad, locName }) => {


    // const [lat1, setlat1] = useState(lat)
    // const [lng1, setlng1] = useState(lng)
    // const [rad1, setrad1] = useState(rad)
    // const [locName1, setlocName1] = useState(Name)
    const [userId, setuserId] = useState('634e86ad8b3a310a0652fcc6')
    const [errorMessage, setErrorMessage] = useState(null);



    const router = useRouter()

    const send_latlng = async (e) => {

        e.preventDefault();

       
        const payload = {locName, lat, lng, rad,userId }

        

        console.log('payload', payload)
       

        const result = await add_location(payload)
        
     
      
        if (result.hasError == true) {
          
            // setErrorMessage(error);

            console.log({result})

          
        } else {
  
         console.log("location data added") 

        router.replace('/')
       
      
        }
      };  

      

  
  return (
   <>
  
   <form onSubmit={send_latlng}>

   
   <Button type="submit" >Save</Button>
   </form>

   </>
  );
};

export default Add_latlong;