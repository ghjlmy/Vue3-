import axios from "./axios";
export const whh= async ()=>{
  return  axios.get("/users/XPoet")
}