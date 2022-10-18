
import { dbConnect } from "../../../connect/dbconnect";
import Hotcars from "../../../models/Cars";
import { errorHandler } from "../../../util/common";



export default async function handler(req, res) {

  if (req.method !== "POST") {

    errorHandler("Invalide Request Type is not a POST", res);

  } else {      


    try {

      
        const {pnumber,typeV,userId} = req.body;
         
  

      await dbConnect();

      const htcars = new Hotcars({
        pnumber:pnumber,
        typeV:typeV,
        userId:userId
       
      });

    
      const savehtcars = await htcars.save();

      if (savehtcars) {
       

        res.status(200).json(savehtcars)
        
      } else {
        errorHandler("Something went wrong", res);
      }

     

    }catch(error){
      errorHandler(error, res);
    }

  }
}

  
