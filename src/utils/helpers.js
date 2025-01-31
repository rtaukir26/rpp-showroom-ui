import * as Yup from "yup";

export const createProduct_schema = Yup.object({
  name: Yup.string().required("name is required"),
  price: Yup.number().required("price is required"),
  category: Yup.string().required("category is required"),
  subCategory: Yup.string().required("sub category is required"),
  description: Yup.string().required("description is required"),
});
