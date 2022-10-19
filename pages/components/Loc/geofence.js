
import { Flex, Box,Input,useDisclosure,Modal,ModalBody,ModalContent, ModalFooter,
    Button, InputGroup,InputLeftAddon, Center, Stack } from "@chakra-ui/react";
import React from "react";
import GoogleMapReact from "google-map-react";

const Geofence = ({ coordinates,rad }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    let circle;

  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
      position: coordinates,
      map,
      title: "Hello World!",
    });
    return marker;
  };

  
  const addCircle = (map, maps) => {
    circle = new maps.Circle({
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.3,
      
      map,
       center: coordinates,
       radius: rad
      
    });
  };



  return (
    <Flex >  
        <Button onClick={onOpen}>Maps</Button>
      
        <Modal isOpen={isOpen} onClose={onClose}  >

        <ModalContent maxW={'60vw'}>
        <Box h={"60vh"}>
        <GoogleMapReact
          yesIWantToUseGoogleMapApiInternals={true}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={8}
          onGoogleApiLoaded={({ map, maps }) => {
            renderMarkers(map, maps),addCircle(map,maps);
          }}
        ></GoogleMapReact>
      </Box>

        <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
       </Button>
        </ModalContent>
       
       </Modal>
        
        </Flex>
   
  );
};

export default Geofence;
