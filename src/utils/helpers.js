import * as Yup from "yup";
import { TOKEN } from "../constant/localStorage";

export const createProduct_schema = Yup.object({
  name: Yup.string().required("name is required"),
  price: Yup.number().required("price is required"),
  category: Yup.string().required("category is required"),
  subCategory: Yup.string().required("sub category is required"),
  description: Yup.string().required("description is required"),
});

export const setTokenWithExpiry = (token, expiryTimeInMs) => {
  const expiryTimestamp = Date.now() + expiryTimeInMs;
  localStorage.setItem(TOKEN, token);
  localStorage.setItem("tokenExpiry", expiryTimestamp);
};

//handle add quantity
// export const handleAddQty = () => {
//   if (productQty < 10) {
//     setProductQty((pre) => pre + 1);
//   }
// };
// //handle decrease quantity
// export const handleDecrQty = () => {
//   if (productQty > 1) {
//     setProductQty((pre) => pre - 1);
//   }
// };
