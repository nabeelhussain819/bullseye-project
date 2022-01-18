import * as constants from '../Constant'
import request from '../request'

const baseUrl = `${constants.BASE_API}users`;

function all(params = {}) {
    return request({
        url: baseUrl,
        params
    })
}

const UserService = {
    all
};

export default UserService