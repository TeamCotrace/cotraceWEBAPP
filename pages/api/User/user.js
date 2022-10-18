
import { dbConnect } from "../../../connect/dbconnect";
import User from "../../../models/User";
import { errorHandler } from "../../../util/common";



export default async function handler(req, res) {

  if (req.method !== "POST") {

    errorHandler("Invalide Request Type is not a POST", res);

  } else {      


    try {

      
        const {email,password,userlevel} = req.body;
         
  

      await dbConnect();

      const adduser = new User({
        email:email,
        password:password,
        userlevel:userlevel
       
      });

    
      const saveUser = await adduser.save();

      if (saveUser) {
       

        res.status(200).json(saveUser)
        
        
      } else {
        errorHandler("Something went wrong", res);
      }

     

    }catch(error){
      errorHandler(error, res);
    }

  }
}

  
