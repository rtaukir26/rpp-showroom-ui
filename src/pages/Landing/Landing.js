import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  BrandLog,
  HeroLogo,
  ImageIcons,
  SearchIcon,
  SocialMedia,
} from "../../utils/images";
import Card from "./Card";
import Footer from "./Footer";
import ReactCarousel from "../../components/Carousel/ReactCarousel";
import ReactBuyPopup from "../../components/ReactBuyPopup/ReactBuyPopup";
import Menu from "../../components/Menu/Menu";
import {
  addToCartApi,
  getAllProductsApi,
  getNoOfAddedCartsApi,
} from "../../services/landingServices";
import { toast } from "react-toastify";
import ProductLoader from "../../components/Loaders/ProductLoader/ProductLoader";
import { useNavigate } from "react-router-dom";
import { routPath } from "../../Routes/rootpath";

const Landing = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const [buyPopupOpen, setBuyPopupOpen] = useState(false);
  const [productsData, setProductsData] = useState([]);
  const [productDetails, setProductDetails] = useState({});
  const [noOfCarts, setNoOfCarts] = useState(0);
  const [productQty, setProductQty] = useState(1);
  console.log("productsData", productsData);

  const getTotalAddedCarts = () => {
    getNoOfAddedCartsApi()
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setNoOfCarts(res.data.totalCarts);
        }
      })
      .catch((err) => {
        return err;
      });
  };

  //get total no of added products
  useLayoutEffect(() => {
    getTotalAddedCarts();
  }, []);

  //get all products
  useEffect(() => {
    getAllProductsApi()
      .then((res) => {
        setLoader(false);
        if (res.status === 200) {
          setProductsData(res.data.data);
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        setLoader(false);
        return err;
      });
  }, []);

  //handle buy - clicking on buy button to open popup
  const handleBuy = (item) => {
    setBuyPopupOpen(true);
    setProductDetails(item);
  };

  //handle add to cart
  const handleAddToCart = (productItem) => {
    let payload = {
      productId: productItem._id,
      quantity: productQty,
    };
    addToCartApi(payload)
      .then((res) => {
        if (res.status === 200) {
          setProductQty(1);
          setBuyPopupOpen(false);
          getTotalAddedCarts();
          toast.success("product added in cart successfully");
        } else {
          toast.error("Failed to add in cart");
        }
      })
      .catch((err) => {
        console.log("err", err);
        setProductQty(1);
        toast.error(err.response.data.message);
      });
  };
  //handle add quantity
  const handleAddQty = () => {
    if (productQty < 10) {
      setProductQty((pre) => pre + 1);
    }
  };
  //handle decrease quantity
  const handleDecrQty = () => {
    if (productQty > 1) {
      setProductQty((pre) => pre - 1);
    }
  };
  return (
    <div className="landing-main">
      <ReactBuyPopup
        isOpen={buyPopupOpen}
        handleClose={setBuyPopupOpen}
        product={productDetails}
        handleAddToCart={handleAddToCart}
        handleAddQty={handleAddQty}
        handleDecrQty={handleDecrQty}
        // setProductQty={setProductQty}
        productQty={productQty}
      />
      {/* Header */}
      <div className="landing-header">
        <div className="header-logo">
          <div>
            <img src={BrandLog.imgFile} alt={BrandLog.imgName} />
          </div>
          <span>RPP Shop</span>
        </div>
        <ul className="header-list df-ac-je">
          <li className="cart" onClick={() => navigate(routPath.cart)}>
            <img src={ImageIcons.carts} alt="carts" />
            <span className="dot">{noOfCarts}</span>
          </li>
          <li>Sign in</li>
          <li>Sign out</li>
        </ul>
      </div>
      {/* body */}
      <div className="landing-body">
        <div className="wrapper">
          <div className="content-con">
            <h1>
              <span className="highlight">Trusted</span> and best quality
              vehicle parts to boost your vehicle{" "}
              <span className="highlight" style={{ background: "#4353a5b8" }}>
                long.
              </span>
            </h1>
            <span>Most selling parts of the month</span>
            <div className="products-con ">
              <div className="products">
                {/* <Product img={TrendingProducts["p1"]} cls="p1" />
                <Product img={TrendingProducts["p2"]} cls="p2" />
                <Product img={TrendingProducts["p1"]} cls="p3" />
                <Product img={TrendingProducts["p2"]} cls="p4" />
                <Product img={TrendingProducts["p1"]} cls="p5" />
                <Product img={TrendingProducts["p2"]} cls="p6" /> */}
                <div className="react-carousel">
                  <ReactCarousel />
                </div>
              </div>
            </div>
          </div>

          <div className="img-con">
            <img
              className="main-img"
              src={HeroLogo.imgFile}
              alt={HeroLogo.imgName}
            />
            <div className="brand-name">
              <p>
                A website where you can trust and buy all parts of your vehicle.
              </p>
              <div className="social-con">
                <span>visit our more platforms.</span>
                <div className="social df-ac-js">
                  <div>
                    <img src={SocialMedia["facebook"]} alt="facebook" />
                  </div>
                  <div>
                    <img src={SocialMedia["insta"]} alt="insta" />
                  </div>
                  <div>
                    <img src={SocialMedia["linkedIn"]} alt="linkedIn" />
                  </div>
                  <div>
                    <img src={SocialMedia["whatsapp"]} alt="whatsapp" />
                  </div>
                  <div>
                    <img src={SocialMedia["youtube"]} alt="youtube" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* products container */}
        <div className="all-products shadow">
          <Menu />
          <div className="all-product-body">
            <div className="search-con">
              <div className="search">
                <img src={SearchIcon.imgFile} alt={SearchIcon.imgName} />
                <input type="text" placeholder="search parts" />
              </div>
            </div>
            {loader ? (
              <ProductLoader />
            ) : (
              <div className="product-wrapper">
                {productsData?.length > 0 ? (
                  <>
                    <>
                      {productsData?.map((product) => (
                        <Card
                          key={product._id}
                          product={product}
                          handleBuy={handleBuy}
                          handleAddToCart={handleAddToCart}
                        />
                      ))}
                    </>
                  </>
                ) : (
                  <div className="not-found">
                    <span>Product not found</span>
                    <img src={ImageIcons["notFound"]} alt="not-found" />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <div className="react-carousel">
        <ReactCarousel />
      </div> */}

      {/* Clients */}
      <Footer />
    </div>
  );
};

export default Landing;
