import axios from "axios";

const key = 183108595;

const api = axios.create({
  baseURL: "https://www.even3.com.br",
  headers: { "Authorization-Token": key },
});

export default api;
