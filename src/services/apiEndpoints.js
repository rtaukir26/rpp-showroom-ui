const BASE_URL = process.env.REACT_APP_API_URL;

export const apiEndPoints = {
  login: `${BASE_URL}/api/auth/login`,
  profile: `${BASE_URL}/api/auth/profile`,
  logout: `${BASE_URL}/api/auth/logout`,
  createProducts: `${BASE_URL}/api/product/create`,
  getAllProducts: `${BASE_URL}/api/product/all`,
  getCategory: `${BASE_URL}/api/product/category`,
  getProductInfo: `${BASE_URL}/api/product/info/:id`,
  addToCart: `${BASE_URL}/api/cart/add-to-cart`,
  getAllCart: `${BASE_URL}/api/cart/user-cart`,
  getCartInfo: `${BASE_URL}/api/cart/cart-info/:productId`,
  updateQty: `${BASE_URL}/api/cart/update-qty`,
  deleteCart: `${BASE_URL}/api/cart/delete-cart`, //carts > products > productId > _id
  getTotalCartNo: `${BASE_URL}/api/cart/total-added-products`,
  buyProduct: `${BASE_URL}/api/order/buy`,
};
