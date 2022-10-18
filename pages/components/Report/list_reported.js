import { useState } from 'react';
import DataTable from 'react-data-table-component';
import { list_reported } from '../../../axios/reported';
import { useEffect } from 'react';
import { Flex, Avatar, Box, Button, Spacer } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useSession } from "next-auth/react";
import {Report_image} from "./reportimage";


const Reported_list = () => {

    const [data, setdata] = useState([])
    const [userId, setuserId] = useState('634e86ad8b3a310a0652fcc6');


    const {data: session} =  useSession();
 

    const router = useRouter()


  
    const getData = async (userId) => {     

      const payload = {userId}

            const datalist = await list_reported(payload);

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
                name:"latitude",
                selector: row=>row.lat,
                sortable: true,                
          
            },
            {        
                name:"longtitude",
                selector: row=>row.lng,
                sortable: true,                
          
            },
                  
          
            // {        
            //     name:"Image",
            //     cell: (d) =>(
                  
            //         <Report_image imagelink={d.image} />
                    
            //     )          
          
            // },
          
            
            
            
            ]

           

    return (
        <Flex direction={'column'}>
        
      <Box>
      {console.log("list",data)}
             <DataTable  columns ={columns} data={data} title=""  defaultSortFieldId="createdAt" pagination />

      </Box>
              
        </Flex>
    


        
    )



}

export default Reported_list;