import axios from "axios";
import {
    setUser,
    setAllUsers,
} from "./userSlice.js"

const URLBASE = import.meta.env.VITE_URL_BASE

export const postUser = (data) => {
    return async (dispatch) => {
      axios
        .post(`${URLBASE}/users/create`, data)
        .then((res) => {
          dispatch(setUser(res.data));
        })
        .catch((e) => console.log(e));
    };
  };

export const getAllUsers = (filters) => {
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
      .get(`${URLBASE}/users?${query}`)
      .then((res) => {
        dispatch(setAllUsers(res.data))
      })
      .catch((e) => console.log(e))
  }
}

export const deleteUser = (id) => {
  return async (dispatch) => {
    axios
      .put(`${URLBASE}/users/desactivate/${id}`)
      .catch((e) => console.log(e))
  }
}

export const activateUser = (id) => {
  return async (dispatch) => {
    axios
      .put(`${URLBASE}/users/activate/${id}`)
      .catch((e) => console.log(e))
  }
}