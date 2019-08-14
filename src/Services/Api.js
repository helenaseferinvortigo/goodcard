import axios from "axios";

const api = axios.create({
    baseURL: "https://fir-app-d2de4.firebaseio.com/"
});

export default api;