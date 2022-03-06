import * as constants from "../Constant";
import request from "../request";

const baseUrl = `${constants.BASE_API}users`;

function all(params = {}) {
    return request({
        url: baseUrl,
        params,
    });
}

function single(id, params = {}) {
    return request({
        url: `${constants.BASE_APP}consumer/${id}`,
        params,
    });
}

function getSurveys(id, params = {}) {
    return request({
        url: `${constants.BASE_APP}consumer-details/${id}`,
    });
}

const UserService = {
    all,
    single,
    getSurveys,
};

export default UserService;
