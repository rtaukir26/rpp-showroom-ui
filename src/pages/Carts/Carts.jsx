import { useState } from "react";
import { ImageIcons, Products } from "../../utils/images";
import { useEffect } from "react";
import {
  buyProductApi,
  deleteCartApi,
  getAllCartsApi,
} from "../../services/cartService";
import { toast } from "react-toastify";
import DataNotFound from "../../components/DataNotFound/DataNotFound";
import CartLoader from "../../components/Loaders/CartLoader/CartLoader";

const Carts = () => {
  const [cartData, setCartData] = useState([]);
  const [loader, setLoader] = useState(true);
  console.log("cartData", cartData);

  const getAllCarts = () => {
    getAllCartsApi()
      .then((res) => {
        setLoader(false);
        if (res.status === 200) {
          setCartData(res.data.cart);
        }
      })
      .catch((err) => {
        setLoader(false);
        toast.error(`${err.response.data.message} | Please Login`);
      });
  };

  useEffect(() => {
    getAllCarts();
  }, []);

  //handle delete Product
  const handleDeleteProduct = (item) => {
    deleteCartApi(item)
      .then((res) => {
        if (res.status === 200) {
          getAllCarts();
          toast.success(res.data.message);
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        console.log("err", err);
      });
  };
  //handle Buy Product
  const handleBuyProduct = (item) => {
    buyProductApi(item)
      .then((res) => {
        if (res.status === 200) {
          toast.success(res.data.message);
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        console.log("err", err);
      });
  };

  return (
    <div className="cart-main p-4">
      <div className="cart-header p-3 fs-5 fw-bold d-flex flex-column">
        <span>Total carts:&nbsp;{cartData[0]?.products?.length}</span>
        <span className="">
          Total Amount:&nbsp;{cartData[0]?.grossTotalAmount}&nbsp;&#8377;
        </span>
      </div>

      <div className="cart-container container-fluid">
        <div className="cart-wrap bg-white">
          {loader ? (
            <CartLoader />
          ) : (
            <>
              {cartData?.length > 0 ? (
                <>
                  {cartData?.map((item) =>
                    item?.products.length > 0 ? (
                      item?.products.map((prod) => (
                        <div
                          className="cart-item p-4 d-flex justify-content-start"
                          key={prod._id}
                        >
                          <div
                            className="cart-img-div d-flex align-items-center justify-content-center overflow-hidden"
                            style={{ height: "160px", width: "160px" }}
                          >
                            <img
                              className="cart-img "
                              src={prod?.productId?.photos[0]?.url}
                              alt="imgIcon"
                            />
                          </div>
                          {/* content */}

                          <div class="card-content d-flex flex-column ms-5  ">
                            <div className="d-flex align-items-center">
                              <strong class="me-4">
                                {prod?.productId?.name}{" "}
                              </strong>
                              <span className="bg-primary shadow text-white py-1 px-3 rounded-5 d-flex align-items-center">
                                <img
                                  src={ImageIcons.star}
                                  alt="star"
                                  style={{ width: "20px" }}
                                  className="me-2"
                                />
                                4.1 (users 2890+)
                              </span>
                            </div>
                            <p class="my-1 fs-6">
                              {prod?.productId?.description}
                            </p>
                            <span> {prod?.productId?.price}&nbsp;&#8377;</span>
                            <div className="add-qty  mt-1 d-flex align-items-center">
                              <strong>
                                Total {prod?.totalAmount}&nbsp;&#8377;
                              </strong>
                              <div className="qty-btn ms-3 d-flex align-items-center">
                                <span
                                  className="cursor-pointer p- shadow-sm border rounded d-flex align-items-center justify-content-center"
                                  style={{ width: "30px" }}
                                >
                                  -
                                </span>
                                <span className="mx-3">{prod?.quantity}</span>
                                <span
                                  className="cursor-pointer p- shadow-sm border rounded d-flex align-items-center justify-content-center"
                                  style={{ width: "30px" }}
                                >
                                  +
                                </span>
                              </div>
                            </div>
                            <div className="btn-grp mt-2 d-flex align-items-center">
                              <button
                                className="btn border shadow d-flex align-items-center"
                                onClick={() => handleDeleteProduct(prod)}
                              >
                                <img
                                  className="me-2"
                                  src={ImageIcons.deleteIcon}
                                  alt="delete"
                                />
                                Delete
                              </button>
                              <button
                                className="btn border shadow ms-4 d-flex align-items-center"
                                onClick={() => handleBuyProduct(prod)}
                              >
                                <img
                                  className="me-2"
                                  src={ImageIcons.shoppingBag}
                                  alt="buy"
                                />
                                Buy now
                              </button>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <DataNotFound />
                    )
                  )}
                </>
              ) : (
                <DataNotFound />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Carts;
