import React, { useEffect, useLayoutEffect, useState } from "react";
import { BrandLog, ImageIcons } from "../../utils/images";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { routPath } from "../../Routes/rootpath";
import { getNoOfAddedCartsApi } from "../../services/landingServices";
import { getUserDetailsApi, logoutApi } from "../../services/authServices";
import { toast } from "react-toastify";
import { TOKEN } from "../../constant/localStorage";
import { useDispatch, useSelector } from "react-redux";
import { updateCountInCart } from "../../redux/totalAddedCartCount.slice";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const totalNoOfCartCounts = useSelector(
    (state) => state.updateNoOfCountSlice
  );

  const [userDetails, setUserDetails] = useState({});
  console.log("userDetails", userDetails);

  const getTotalAddedCarts = () => {
    getNoOfAddedCartsApi()
      .then((res) => {
        console.log("res", res);
        if (res.status === 200) {
          dispatch(updateCountInCart(res.data.totalCarts));
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(updateCountInCart(0));
      });
  };

  // get total no of added products
  useEffect(() => {
    getTotalAddedCarts();
  }, []);

  //logout
  const handleLogout = () => {
    logoutApi()
      .then((res) => {
        if (res.status === 200) {
          localStorage.removeItem(TOKEN);
          navigate(routPath.login);
        }
      })
      .catch((err) => {
        localStorage.removeItem(TOKEN);
        navigate(routPath.login);
        console.log(err);
      });
  };

  //get user details
  useEffect(() => {
    getUserDetailsApi()
      .then((res) => {
        if (res.status === 200) {
          setUserDetails(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="main-header">
      <Link to={routPath.landing}>
        <div className="header-logo">
          <div>
            <img src={BrandLog.imgFile} alt={BrandLog.imgName} />
          </div>
          <span>RPP </span>
        </div>
      </Link>
      <div className="header-list df-ac-je">
        <div className="cart" onClick={() => navigate(routPath.cart)}>
          <img src={ImageIcons.carts} alt="carts" />
          <span className="dot">{totalNoOfCartCounts}</span>
        </div>

        <div className="user">
          {/* <img src={ImageIcons.userIcon} alt="user" /> */}
          <span>{userDetails?.user?.email}</span>
        </div>
        <div className="logout" onClick={handleLogout} title="Logout">
          <img src={ImageIcons.logoutIcon} alt="logout" />
        </div>
      </div>
    </div>
  );
};

export default Header;
