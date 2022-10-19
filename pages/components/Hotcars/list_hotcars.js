import { useState } from 'react';
import DataTable from 'react-data-table-component';
import { list_hotcars } from '../../../axios/hotcars';
import { useEffect } from 'react';
import { Flex, Avatar, Box, Button, Spacer } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import Addhotcars from './addhotcars';


const Hotcars_list = () => {

    const [data, setdata] = useState([])
    const [userId, setuserId] = useState('634e86ad8b3a310a0652fcc6');


 

    const router = useRouter()


  
    const getData = async (userId) => {     

      const payload = {userId}

            const datalist = await list_hotcars(payload);

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
                name:"Plate Number",
                selector: row=>row.pnumber,
                sortable: true,                
          
            },
            {        
                name:"Vehicle Type",
                selector: row=>row.typeV,
                sortable: true,                
          
            },
                  
          
            // {        
            //     name:"Action",
            //     cell: (d) =>(
            //         <Flex direction={'row'}>
            //             { console.log('coord',d.locInfo)}       
            //         </Flex>                  
                    
                
            // )              
          
            // },
               
          
            
            
            
            ]

           

    return (
        <Flex direction={'column'}>
        <Addhotcars />
      <Box>
      {console.log("list",data)}
             <DataTable  columns ={columns} data={data} title=""  defaultSortFieldId="createdAt" pagination />

      </Box>
              
        </Flex>
    


        
    )



}

export default Hotcars_list;