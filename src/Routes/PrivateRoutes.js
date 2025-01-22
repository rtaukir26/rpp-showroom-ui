import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { routPath } from "./rootpath";

const PrivateRoutes = ({ children }) => {
  const navigate = useNavigate();
  const userToken = true;
  useEffect(() => {
    if (userToken === null) {
      return navigate(routPath.landing);
    }
  }, []);
  return children;
};

export default PrivateRoutes;
