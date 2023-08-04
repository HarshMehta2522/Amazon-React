import axios from "axios";

const instance = axios.create({
  baseURL: "https://amzon-backend.netlify.app/api",
});
export default instance;
