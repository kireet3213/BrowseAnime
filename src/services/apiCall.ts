import axios from "axios";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;


export function getRequest(url: string) {
  const getUrl = `${BASE_URL}${url}`;
  return axios.get(getUrl,{
    headers:{
      "Content-Type":'application/json'
    }
  });
}
