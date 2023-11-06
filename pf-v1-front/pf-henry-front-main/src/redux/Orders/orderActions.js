import axios from "axios";
import {
    setOrder,
    setAllOrders
} from "./orderSlice.js"

const URLBASE = import.meta.env.VITE_URL_BASE

export const getAllOrders = (filters) => {
  const query = Object.entries(filters)
    .map(([key, value]) => {
      if (value) {
        return `${key}=${value}`;
      }
      return "";
    })
    .filter(Boolean)
    .join("&");
  return async (dispatch) => {
    console.log("la actoin: " + query);
    await axios
      .get(`${URLBASE}/orders?${query}`)
      .then((res) => {
        dispatch(setAllOrders(res.data))
      })
      .catch((e) => console.log(e))
  }
}