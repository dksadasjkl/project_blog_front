import axios from "axios";
import getServerAddress from "../../constants/serverAddress";

const instance = axios.create({
    baseURL: getServerAddress(),
    headers: {
        Authorization: "Bearer " + localStorage.getItem("AccessToken")
    }
});

export default instance;


export const portOneInstance = axios.create({
    baseURL: "https://api.portone.io",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});