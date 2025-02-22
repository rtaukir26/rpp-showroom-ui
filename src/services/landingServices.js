import axios from "axios";
import { apiEndPoints } from "./apiEndpoints";
import axiosInstance, { getToken } from "./authServices";

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
    let response = axiosInstance.post(
      apiEndPoints.addToCart,
      { productId: product.productId, quantity: product.quantity }
      // {
      //   headers: {
      //     Authorization: "Bearer " + getToken(),
      //   },
      // }
    );
    return response;
  } catch (error) {
    return error;
  }
};
export const getNoOfAddedCartsApi = async () => {
  try {
    let response = axiosInstance.get(
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
export const getCategoryApi = async () => {
  try {
    let response = axios.get(
      apiEndPoints.getCategory,

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
