import axios from "axios";
// import * as axios from 'axios';
import { getValue } from "../util/common"



export const addrepo = async (payload) => {
    try {

        const res = await axios.post(process.env.NEXTAUTH_URL + '/api/reported/addreport', payload);
        return res.data;

    }catch(error){

        return getValue(error,["response","data"]);
    }
}


export const list_reported = async (userId) => {
    try {

        const res = await axios.post(process.env.NEXTAUTH_URL + '/api/reported/list_report',userId);
        return res.data;

    }catch(error){

        return getValue(error,["response","data"]);
    }
}


