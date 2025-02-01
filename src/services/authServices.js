import axios from "axios";
import { apiEndPoints } from "./apiEndpoints";
import { TOKEN } from "../constant/localStorage";

export const getToken = () => {
  let token = localStorage.getItem(TOKEN);
  // let token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzI5ZjVmOGJjNzhlZjE2YWU1OTI2ZDQiLCJlbWFpbCI6InRAZ21haWwuY29tIiwiaWF0IjoxNzM3NTI2NTYyLCJleHAiOjE3Mzc1NTUzNjJ9.AqClgSTuMXmOnEdMiNwpVdmHFRrbHCuXS7uKpvneuJg";
  return token;
};

export const loginApi = (formData) => {
  try {
    let response = axios.post(
      apiEndPoints.login,
      { email: formData.email, password: formData.password },
      {
        headers: {
          Authorization: "Bearer " + getToken(),
        },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};
export const logoutApi = () => {
  try {
    let response = axios.get(apiEndPoints.logout, {
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};
