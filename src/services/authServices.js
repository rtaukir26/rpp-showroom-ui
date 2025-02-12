import axios from "axios";
import { apiEndPoints } from "./apiEndpoints";
import { TOKEN } from "../constant/localStorage";

import { useNavigate } from "react-router-dom";
import { routPath } from "../Routes/rootpath";
import { toast } from "react-toastify";
const BASE_URL = process.env.REACT_APP_API_URL;
// ✅ Create a custom Axios instance
export const axiosInstance = axios.create({
  // baseURL: "https://your-api-url.com", // Replace with your actual API URL
  baseURL: BASE_URL, // Replace with your actual API URL
});

// ✅ Add an interceptor to check token before any request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(TOKEN);
    const expiryTimestamp = localStorage.getItem("tokenExpiry");

    if (!token || !expiryTimestamp || Date.now() > expiryTimestamp) {
      // Remove token & force logout if expired
      localStorage.removeItem(TOKEN);
      localStorage.removeItem("tokenExpiry");
      toast.error("Token expired. Please login again");

      // Redirect to login (Optional: Can be handled at App.js level too)
      // window.location.href = routPath.login; // 🔴 Forces logout instantly

      return Promise.reject(new Error("Token expired. Please log in again."));
    }

    config.headers.Authorization = `Bearer ${token}`; // Attach token to request
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;

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
export const getUserDetailsApi = () => {
  try {
    let response = axios.get(apiEndPoints.profile, {
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    });
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
