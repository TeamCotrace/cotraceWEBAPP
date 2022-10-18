import axios from "axios";
// import * as axios from 'axios';
import { getValue } from "../util/common"



export const addhotcars = async (payload) => {
    try {

        const res = await axios.post(process.env.NEXTAUTH_URL + '/api/Hot_cars/addhotcars', payload);
        return res.data;

    }catch(error){

        return getValue(error,["response","data"]);
    }
}



export const list_hotcars = async (userId) => {
    try {

        const res = await axios.post(process.env.NEXTAUTH_URL + '/api/Hot_cars/hotcarslist',userId);
        return res.data;

    }catch(error){

        return getValue(error,["response","data"]);
    }
}

