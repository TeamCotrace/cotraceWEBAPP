import { useState } from 'react';
import DataTable from 'react-data-table-component';
import { list_location } from '../../../axios/location';
import { useEffect } from 'react';
import { Flex, Avatar, Box, Button, Spacer } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Map_control from '../MapControl';
import Geofence from './geofence';


const Reported_list = () => {

    const [data, setdata] = useState([])
    const [userId, setuserId] = useState('634e86ad8b3a310a0652fcc6');


 

    const router = useRouter()


  
    const getData = async (userId) => {     

      const payload = {userId}

            const datalist = await list_location(payload);

            if(!datalist.hasError == true){                
           

                if(!datalist.body == ""){  

              
              console.log(datalist.body);
                  
              setdata(datalist.body);

               }      
            
              }else {

                console.log("wala data")

              }

        }

        useEffect(() => {             
          
          getData(userId) 
    
             
            }, [userId]);

            

            const columns = [    
 
           {        
                name:"Station Name",
                selector: row=>row.locName,
                sortable: true,                
          
            },
            {        
                name:"latitude",
                selector: row=>row.latitude,
                sortable: true,                
          
            },
            {        
                name:"longtitude",
                selector: row=>row.longitude,
                sortable: true,                
          
            },
                  
          
          
                  
            {        
                name:"View Maps",
                cell: (d) =>(
                    <Flex direction={'row'}>
                        <Geofence coordinates={{lat:d.latitude, lng: d.longitude}} rad={d.radius} />    
                    </Flex>                 
                    
                
            )              
                    
            
              },
          
            
            
            
            ]

           

    return (
        <Flex direction={'column'}>
        <Map_control />
      <Box>
      {console.log("list",data)}
             <DataTable  columns ={columns} data={data} title=""  defaultSortFieldId="createdAt" pagination />

      </Box>
              
        </Flex>
    


        
    )



}

export default Reported_list;