import React from "react";
import { ImageIcons } from "../../utils/images";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-main">
      <div className="login-body">
        <div className="login-wrap">
          {/* login container */}
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

          {/* comp content */}

          <div className="shop-info-container">
            <div className="wrapper">
              <div className="top-con">
                <p className="fs-4 my-4">What's your thoughts</p>
                <p className="mt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum provident dicta fugit eveniet ipsam sit cupiditate
                  quidem illum! Totam, distinctio.
                </p>
                <div>clients</div>
              </div>

              <div className="bottom-con">
                <strong className="">
                  Get your best parts here and best quality in best price
                </strong>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iusto, corrupti veniam quibusdam excepturi repellat error
                  explicabo ipsam tempore repudiandae nobis!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
