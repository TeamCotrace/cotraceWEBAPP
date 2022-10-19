
import { dbConnect } from "../../../connect/dbconnect";
import Location from "../../../models/Location";
import { errorHandler,responseHandler } from "../../../util/common";


export default async function handler(req, res) {
    if (req.method !== "POST") {
  
      errorHandler("Invalide Request Type is not a POST", res);
  
    } else {
  
      try {
  
        const {locName,lat,lng,rad,userId} = req.body;
  
        await dbConnect();   
  
        const locdata = new Location({
            
          locName:locName,
          latitude:lat,
          longitude:lng,
          radius:rad,
          userId: userId 

        });
  
        const savelocdata = await locdata.save();  
     
  
        if (savelocdata) {
     
          responseHandler(savelocdata, res, 201);
  
        
          
        } else {

          errorHandler("Something went wrong", res);

        }
      } catch (error) {

        errorHandler(error, res);

      }
    }
  }
  