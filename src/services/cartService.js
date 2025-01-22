import axios from "axios";
import { getToken } from "./authServices";
import { apiEndPoints } from "./apiEndpoints";

export const getAllCartsApi = async () => {
  try {
    let response = axios.get(apiEndPoints.getAllCart, {
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};

//delete product from cart
export const deleteCartApi = async (product) => {
  try {
    let response = axios.delete(
      `${apiEndPoints.deleteCart}/${product.productId._id}`,
      {
        headers: {
          Authorization: "Bearer " + getToken(),
        },
        //   params: {
        //     productId,
        //   },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};
//buy product
export const buyProductApi = async (product) => {
  try {
    let response = axios.post(
      apiEndPoints.buyProduct,
      {
        productId: product._id,
        fullName: "Taukir",
      },
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
