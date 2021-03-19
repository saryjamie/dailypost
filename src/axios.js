import axios from "axios";

const instance = axios.create({
  baseURL: "http://jsonplaceholder.typicode.com",
});

instance.defaults.headers.common["Authoriaztion"] = "AUTH TOKEN FROM INSTANCE";

export default instance;
