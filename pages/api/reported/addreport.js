
import { dbConnect } from "../../../connect/dbconnect";
import Reported from "../../../models/Reported";
import { errorHandler } from "../../../util/common";



export default async function handler(req, res) {

  if (req.method !== "POST") {

    errorHandler("Invalide Request Type is not a POST", res);

  } else {      


    try {

        
        const {pnumber,lat,lng, image, remarks, userId} = req.body;
         
  

      await dbConnect();

      const addrepo = new Reported({
        pnumber:pnumber,
        lat:lat,
        lng:lng,
        image:image,
        remarks: remarks,        
        userId:userId
       
      });

    
      const saverepo = await addrepo.save();

      if (saverepo) {
       

        res.status(200).json(saverepo)

        
      } else {

        errorHandler("Something went wrong", res);

      }

     

    }catch(error){
      errorHandler(error, res);
    }

  }
}

  
