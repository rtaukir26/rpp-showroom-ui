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
  getCategoryApi,
  getNoOfAddedCartsApi,
} from "../../services/landingServices";
import { toast } from "react-toastify";
import ProductLoader from "../../components/Loaders/ProductLoader/ProductLoader";
import { Link, useNavigate } from "react-router-dom";
import { routPath } from "../../Routes/rootpath";
import { getToken, logoutApi } from "../../services/authServices";
import { TOKEN } from "../../constant/localStorage";
import { updateTotalCartCount } from "../../components/Header/Header";
import { updateCountInCart } from "../../redux/totalAddedCartCount.slice";
import { useDispatch, useSelector } from "react-redux";

const Landing = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const [buyPopupOpen, setBuyPopupOpen] = useState(false);
  const [mainProducts_forFilter, setMainProducts_forFilter] = useState([]); //filter/search products from this main array
  const [productsData, setProductsData] = useState([]);
  const [productDetails, setProductDetails] = useState({});
  const [noOfCarts, setNoOfCarts] = useState(0);
  const [productQty, setProductQty] = useState(1);
  const [categories, setCategories] = useState({});
  const [searchValue, setSearchValue] = useState("");

  const dispatch = useDispatch();
  const totalNoOfCartCounts = useSelector(
    (state) => state.updateNoOfCountSlice
  );
  console.log("productsData", productsData);
  console.log("categories", categories);

  // let token = getToken();

  // console.log("token", token);

  const getTotalAddedCarts = () => {
    getNoOfAddedCartsApi()
      .then((res) => {
        if (res.status === 200) {
          setNoOfCarts(res.data.totalCarts);
          dispatch(updateCountInCart(res.data.totalCarts));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //get total no of added products
  // useLayoutEffect(() => {
  //   getTotalAddedCarts();
  // }, []);

  //get all products
  useEffect(() => {
    getAllProductsApi()
      .then((res) => {
        setLoader(false);
        if (res.status === 200) {
          setProductsData(res?.data?.data);
          setMainProducts_forFilter(res?.data?.data);
        }
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message);
        setLoader(false);
        console.log("err", err);
      });
  }, []);

  //get category
  useEffect(() => {
    getCategoryApi()
      .then((res) => {
        console.log("res", res);
        if (res.status === 200) {
          setCategories(res.data.category);
        }
      })
      .catch((err) => {
        console.log(err);
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
        // toast.error(`${err?.response?.data?.message} | Please Login`);
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

  //logout
  const handleLogout = () => {
    logoutApi()
      .then((res) => {
        // if (res.status === 200) {
        // toast.success("Logout successfully");
        localStorage.removeItem(TOKEN);
        navigate(routPath.login);
        // }
      })
      .catch((err) => {
        // toast.success("Logout failed");
        localStorage.removeItem(TOKEN);
        navigate(routPath.login);
        console.log(err);
      });
  };

  //search
  const handleChangeSearch = (e) => {
    setSearchValue(e.target.value);
    let result = mainProducts_forFilter.filter((item) => {
      const name = item?.category?.name
        ?.toLowerCase()
        .includes(e.target.value?.toLowerCase());
      const mainCat = item?.category?.name
        ?.toLowerCase()
        .includes(e.target.value?.toLowerCase());

      const subCat = item?.category?.subCategory
        ?.toLowerCase()
        .includes(e.target.value?.toLowerCase());

      return name || mainCat || subCat;
    });
    setProductsData(result);
  };

  // clear search
  const handleClearSearch = () => {
    setProductsData(mainProducts_forFilter);
    setSearchValue("");
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

      {!getToken() && (
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
              {/* <span className="dot">{noOfCarts}</span> */}
              <span className="dot">{totalNoOfCartCounts}</span>
            </li>
            <li>
              <Link to={routPath.login}>Sign in</Link>
            </li>
            <li onClick={handleLogout}>Sign out</li>
          </ul>
        </div>
      )}
      {/* body */}
      <div className="landing-body">
        <div className="wrapper">
          {/* Content */}
          <div className="content-con">
            <h1>
              <span className="highlight">Trusted</span> partner for all
              electrical components with over{" "}
              <span className="highlight">10 years </span>of experience provides
              high-quality parts to professionals and DIY enthusiasts alike.
            </h1>
            <span>Most selling parts of the month</span>
            <div className="products-con ">
              <div className="products">
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
          <Menu
            menu={categories}
            mainProducts_forFilter={mainProducts_forFilter}
            setProductsData={setProductsData}
          />
          <div className="all-product-body">
            <div className="search-con">
              <div className="search">
                {!searchValue ? (
                  <img src={SearchIcon.imgFile} alt={SearchIcon.imgName} />
                ) : (
                  <img
                    className="cross"
                    src={ImageIcons.cross2Icon}
                    alt={SearchIcon.imgName}
                    onClick={handleClearSearch}
                  />
                )}
                <input
                  type="text"
                  placeholder="search parts"
                  value={searchValue}
                  onChange={handleChangeSearch}
                />
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
