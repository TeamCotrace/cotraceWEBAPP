

import { Double } from "mongodb";
import mongoose from "mongoose";

const HotcarsSchema = mongoose.Schema({    
    

   
    hotcars: {
        type:Number,     

    },
    pnumber: {
        type:Number,
    },
   
    lat: {
        type:Number,
    },

    lng: {
        type:Number,   

    },

   
    image:{
        type:String,
        trim:true
    },

    locId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Location",   
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",        
    },

    empId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",        
    },




},{

    timestamps: true,

});



export default mongoose.models.Hotcars || mongoose.model('Hotcars', HotcarsSchema);