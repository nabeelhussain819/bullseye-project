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
    return axios.post(baseUrl, params);
}

function remove(params = {}) {
    return axios.post(baseUrl + "/delete", params);
}

function updateStatus(params = {}) {
    return axios.post(baseUrl + "/update-status", params);
}

const UserService = {
    all,
    post,
    remove,
    updateStatus,
};

export default UserService;
