import React, { useLayoutEffect, useState } from "react";
import { BrandLog, ImageIcons } from "../../utils/images";
import { Link, useNavigate } from "react-router-dom";
import { routPath } from "../../Routes/rootpath";
import { getNoOfAddedCartsApi } from "../../services/landingServices";
import { logoutApi } from "../../services/authServices";
import { toast } from "react-toastify";
import { TOKEN } from "../../constant/localStorage";

const Header = () => {
  const navigate = useNavigate();
  const [noOfCarts, setNoOfCarts] = useState(0);

  const getTotalAddedCarts = () => {
    getNoOfAddedCartsApi()
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setNoOfCarts(res.data.totalCarts);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //get total no of added products
  useLayoutEffect(() => {
    getTotalAddedCarts();
  }, []);

  //logout
  const handleLogout = () => {
    logoutApi()
      .then((res) => {
        if (res.status === 200) {
          toast.success("Logout successfully");
          localStorage.removeItem(TOKEN)
          navigate(routPath.login);
        }
      })
      .catch((err) => {
        toast.success("Logout failed");
        console.log(err);
      });
  };
  return (
    <div className="main-header">
      <div className="header-logo">
        <div>
          <img src={BrandLog.imgFile} alt={BrandLog.imgName} />
        </div>
        <span>RPP </span>
      </div>
      <ul className="header-list df-ac-je">
        {/* <li className="cart"> */}

        <li className="cart" onClick={() => navigate(routPath.cart)}>
          <img src={ImageIcons.carts} alt="carts" />
          <span className="dot">{noOfCarts}</span>
        </li>
        {/* </li> */}
        <li>
          <Link to={routPath.createProduct}>Sign in</Link>
        </li>
        <li onClick={handleLogout}>Sign out</li>
      </ul>
    </div>
  );
};

export default Header;
