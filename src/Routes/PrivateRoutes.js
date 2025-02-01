import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { routPath } from "./rootpath";
import { getToken } from "../services/authServices";

const PrivateRoutes = ({ children }) => {
  const navigate = useNavigate();
  const userToken = getToken();
  console.log("userToken", userToken);
  // const userToken = true;
  useEffect(() => {
    if (userToken === null) {
      // if (userToken) {
      return navigate(routPath.root);
    }
  }, []);
  return children;
};

export default PrivateRoutes;
