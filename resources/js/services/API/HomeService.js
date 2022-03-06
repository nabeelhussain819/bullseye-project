import axios from "axios";
import * as constants from "../Constant";

const BASE_URL = `${constants.BASE_APP}home`;

function getTotalCounts(params = {}) {
    return axios.get(BASE_URL + "/get-total-counts", params);
}

const HomeService = {
    getTotalCounts,
};

export default HomeService;
