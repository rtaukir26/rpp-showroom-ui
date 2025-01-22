import axios from "axios";
import { apiEndPoints } from "./apiEndpoints";
export const getToken = () => {
  // let token = localStorage.getItem("token");
  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzI5ZjVmOGJjNzhlZjE2YWU1OTI2ZDQiLCJlbWFpbCI6InRAZ21haWwuY29tIiwiaWF0IjoxNzM3NTIyMjM2LCJleHAiOjE3Mzc1MjU4MzZ9.OcvQnxzxWSuOAF8Ns7cm_G_JssT1ThA1Ok3D8QD9Ff0";
  return token;
};

export const getAllProductsApi = async () => {
  try {
    let response = axios.get(apiEndPoints.getAllProducts, {
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};
export const addToCartApi = async (product) => {
  try {
    let response = axios.post(
      apiEndPoints.addToCart,
      { productId: product.productId, quantity: product.quantity },
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
export const getNoOfAddedCartsApi = async () => {
  try {
    let response = axios.get(
      apiEndPoints.getTotalCartNo,

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
