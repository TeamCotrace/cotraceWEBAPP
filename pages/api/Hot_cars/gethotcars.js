import { dbConnect } from "../../../connect/dbconnect";
import Hotcars from "../../../models/Cars";
import { errorHandler,responseHandler } from "../../../util/common";


export default async function handler(req, res) {


      try {
  
        const { pnumber } = req.body;
  
        await dbConnect();     

        console.log(pnumber)
         
        const getdata = await Hotcars.aggregate([
            
            { 
              $match : { pnumber: pnumber},
            },
                                    
    
        ]).exec();


        if(getdata){

            res.status(200).json(getdata)

        }else{

            errorHandler("Something went wrong", res)

        }
      } catch (error) {

        errorHandler(error, res);

      }
    
  }
  