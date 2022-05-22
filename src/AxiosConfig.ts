import axios from "axios";

const AxiosConfig = axios.create({
    baseURL: "https://jobs-api.squareboat.info/api/v1/"
});

export default AxiosConfig;
