import axios from "axios";
import * as constants from "../Constant";
import request from "../request";

const baseUrl = `${constants.BASE_API}links`;

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
    return axios.post(baseUrl + "/delete", params);
}

const UserService = {
    all,
    post,
    remove,
};

export default UserService;
