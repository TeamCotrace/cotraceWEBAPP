

import mongoose from "mongoose";

const HotcarsSchema = mongoose.Schema({    
    
  
    
    pnumber: {
        type:String,
       
    },

    typeV: {
        type:String,       


    },
  
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",        
    },




},{

    timestamps: true,

});



export default mongoose.models.Hotcars || mongoose.model('Hotcars', HotcarsSchema);