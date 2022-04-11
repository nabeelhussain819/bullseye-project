import axios from "axios";
import * as constants from "../Constant";
import request from "../request";

const BASE_URL = `${constants.BASE_APP}claims`;

function all(params = {}) {
    return request({
        url: BASE_URL,
        params,
    });
}

function single(id) {
    return axios.get(`${BASE_URL}/view/${id}`);
}

function post(params = {}) {
    return axios.post(BASE_URL + "/update", params);
}

function update(params = {}) {
    return axios.post(BASE_URL + "/update", params);
}

const ClaimService = {
    all,
    update,
    post,
    single,
};

export default ClaimService;
