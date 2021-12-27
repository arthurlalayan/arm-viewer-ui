
import axios from 'axios';

const axiosClient = axios.create();

axiosClient.defaults.baseURL = process.env.REACT_APP_ARM_VIEWER_SERVICE_URL;

axiosClient.defaults.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
};

//All request will wait 2 seconds before timeout
axiosClient.defaults.timeout = 2000;

export default axiosClient;
