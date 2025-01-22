const BASE_URL = process.env.REACT_APP_API_URL;

export const apiEndPoints = {
  getAllProducts: `${BASE_URL}/api/product/all`,
  getProductInfo: `${BASE_URL}/api/product/info/:id`,
  addToCart: `${BASE_URL}/api/cart/add-to-cart`,
  getAllCart: `${BASE_URL}/api/cart/all-cart`,
  getCartInfo: `${BASE_URL}/api/cart/cart-info/:productId`,
  updateQty: `${BASE_URL}/api/cart/update-qty`,
  deleteCart: `${BASE_URL}/api/cart/delete-cart/:productId`,
  getTotalCartNo: `${BASE_URL}/api/cart/total-added-products`,
};
