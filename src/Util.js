import axios from "axios";

export default async function fetchData(url, param) {  
  return await axios.get ( url, {
    params: param
  });
}