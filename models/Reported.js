
import mongoose from "mongoose";

const ReportedSchema = mongoose.Schema({    
    
    pnumber: {
        type:String,
       
    },

    lat: {
        type:Number,
    },

    lng: {
        type:Number,
    },

    image: {
        type:String,
       
    },

    remarks: {
        type:String,       
    },
  
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",        
    },


},{

    timestamps: true,

});



export default mongoose.models.Reported || mongoose.model('Reported', ReportedSchema);