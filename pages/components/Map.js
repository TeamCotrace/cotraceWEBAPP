import {Box, Button, Input,Flex, InputGroup, InputLeftAddon, Stack} from "@chakra-ui/react"
import React from "react"
import GoogleMapReact from "google-map-react";
import { useState } from "react";
import {add_location} from "../../axios/location"
import Add_latlong from "./Loc/addLoc";



const AnyReactComponent = ({text}) => <div className="pin"> 
{/* <Box bg={'white'} width={10}>
  {text}
 
</Box> */}
</div>;

let circle;


const Map = ({coordinates}) => {

    const [lat, setlat] = useState('')
    const [lng, setlng] = useState('')
    const [rad, setrad] = useState('')    
    const [locName, setlocName] = useState('')
    const [userId, setuserId] = useState("631ad70c7d662c9bacd2654d")



 



       const addCircle = (map, maps) => {
        circle = new maps.Circle({
          strokeColor: "#FF0000",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "#FF0000",
          fillOpacity: 0.3,
          map,
          // center: {lat:x,lng:y},
          // radius: rad
          
        });
      };

      
    const renderMarkers = (map, maps) => {
      let marker = new maps.Marker({
      position:coordinates,
      map,
      title: 'Hello World!',
      
      });
      return marker;
     };


    
   
const points = [
    { id: 1, title: "Round Pond", lat: 7.345, lng: 125.234 },
    { id: 2, title: "The Long Water", lat: 7.145, lng: 125.897 },
   
  ];
      
  const onChange = (e) => {   
     
      setrad(e.target.value)   
  };

 
  const changeRadius = (e) => {
      
    if(rad > 0) {
      circle.setCenter({lat:lat,lng:lng})
      circle.setRadius(Number(rad))
    }
    
  };






    return (
      
 <Flex direction={'column'}>
 {console.log(lat)}

<Box h={'40vh'}>
<GoogleMapReact
               yesIWantToUseGoogleMapApiInternals={true}            
               defaultCenter = {{lat:11.772,lng:122.776}}
               center = {{lat:11.772,lng:122.776}}
               defaultZoom={5}
               onChange={(e) => {
                 console.log(e.center.lat)
                
               }}
       
              onClick={(e)=>{
                setlat(e.lat)
                setlng(e.lng)

               }}
              onGoogleApiLoaded={({ map, maps }) => {renderMarkers(map,maps), addCircle(map,maps)}
              }        
               >

           
               <AnyReactComponent lat={lat} lng={lng} text="Marker" />

               </GoogleMapReact>
</Box>
 <Box >
 <InputGroup>
 <InputLeftAddon>Name</InputLeftAddon>
 <Input value={locName} onChange={(e)=>{setlocName(e.target.value)}} />
 </InputGroup>

 <InputGroup>
 <InputLeftAddon>Latitude</InputLeftAddon>
 <Input value={lat} onChange={(e)=>{setlat(e.target.value)}} />
 </InputGroup>
 <InputGroup>
 <InputLeftAddon>Longtitude</InputLeftAddon>
 <Input value={lng} onChange={(e)=>{setlng(e.target.value)}} />
 </InputGroup> 

 
  
  <Flex direction={'row'}>

  <InputGroup>
  <InputLeftAddon>Radius</InputLeftAddon>
  <Input
  placeholder="Enter radius"
  type="number"
  min="10"
  name="inputRad"
  onChange={(e) =>{setrad(e.target.value)}}
  />
  </InputGroup>
  <Button
  onClick={(e) =>{changeRadius(e)}}
  >Draw</Button>

  <Add_latlong lat={lat} lng={lng} rad = {rad} locName = {locName} />
  </Flex>
 

              
</Box>

</Flex>

          
    
    
        
    )
    
   
}

export default Map;