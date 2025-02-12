import axios from "axios";
import axiosInstance, { getToken } from "./authServices";
import { apiEndPoints } from "./apiEndpoints";

export const createProductApi = async (product) => {
  try {
    let response = axiosInstance.post(
      apiEndPoints.createProducts,
      {
        productId: product._id,
        name: product.name,
        price: product.price,
        category: product.category,
        subCategory: product.subCategory,
        description: product.description,
      },
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
