import axios from "axios";
import { API_HOST } from "../constant";
import { message } from "antd";

/**
 * 
 * @param {object} param
 * @param {'get' | 'post' =} param.method
 * @param {string} param.url
 * @param {object=} param.params
 * @param {object=} param.data
 */

export function callApi({ method = 'get', url, params, data }){
    return axios({
        url,
        method,
        baseURL: API_HOST,
        params,
        data,
        withCredentials: true,
    }).then(res => {
        const { resultCode, resultMessage } = res.data;
        if(resultCode < 0){
            message.error(resultMessage);
        }
        return {
            isSuccess: resultCode === ResultCode.Success,
            data: res.data.data,
            resultCode,
            resultMessage,
        }
    })
}

export const ResultCode = {
    Success: 0,
}