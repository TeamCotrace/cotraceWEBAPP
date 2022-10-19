
import { Flex, Box,Input,useDisclosure,Modal,ModalBody,ModalContent, ModalFooter,
  Button, InputGroup,InputLeftAddon, Center, Stack } from "@chakra-ui/react";
import React from "react";
import GoogleMapReact from "google-map-react";

const Dashfence = ({ coordinates,rad }) => {

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
  <Flex direction={'row'} width={"95vw"} height={"80vh"}>  
     
     
      <GoogleMapReact
        yesIWantToUseGoogleMapApiInternals={true}
        defaultCenter = {{lat:11.772,lng:122.776}}
               center = {{lat:11.772,lng:122.776}}
               defaultZoom={6}
        onGoogleApiLoaded={({ map, maps }) => {
          renderMarkers(map, maps);
        }}
      ></GoogleMapReact>
       
      </Flex>
 
);
};

export default Dashfence;
