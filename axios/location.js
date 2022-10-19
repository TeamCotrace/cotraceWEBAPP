import axios from "axios";
// import * as axios from 'axios';
import { getValue } from "../util/common"



export const add_location = async (payload) => {
    try {

        const res = await axios.post(process.env.NEXTAUTH_URL + '/api/Location/addlocation', payload);
        return res.data;

    }catch(error){

        return getValue(error,["response","data"]);
    }
}



export const list_location = async (userId) => {
    try {

        const res = await axios.post(process.env.NEXTAUTH_URL + '/api/Location/list_location',userId);
        return res.data;

    }catch(error){

        return getValue(error,["response","data"]);
    }
}
