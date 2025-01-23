import React from "react";
import { ImageIcons } from "../../utils/images";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-main">
      <div className="login-body">
        <div className="login-wrap">
          <div className="login-container">
            <div className="wrapper">
              <span className="mb-4">RPP</span>
              <span className="fs-3">Welcome back</span>
              <small className="">Please enter your account details</small>
              <div className="form-con mt-4">
                <div className="form-grp">
                  <label htmlFor="email">Email</label>
                  <input type="email" />
                </div>
                <div className="form-grp">
                  <label htmlFor="email">Password</label>
                  <input type="password" />
                </div>
                <div className="form-grp">
                  <Link>Forgot password?</Link>
                </div>
                <div className="btn-grp">
                  <button>Sign in</button>
                </div>
              </div>
            </div>
          </div>
          <div className="shop-info-container">shop content</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
