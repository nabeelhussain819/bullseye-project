import axios from "axios";
import { BASE_APP } from "../Constant";
import request from "../request";

const baseUrl = `${BASE_APP}surveys`;

function all(params = {}) {
    return request({
        url: baseUrl,
        params,
    });
}

function post(params = {}) {
    return axios.post(baseUrl + "/store", params);
}

function remove(params = {}) {
    return axios.post(baseUrl + "/destroy", params);
}

function updateStatus(params = {}) {
    return axios.post(baseUrl + "/update", params);
}

const UserService = {
    all,
    post,
    remove,
    updateStatus,
};

export default UserService;
