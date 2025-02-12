import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { loginApi } from "../../services/authServices";
import { toast } from "react-toastify";
import { TOKEN } from "../../constant/localStorage";
import { ImageIcons } from "../../utils/images";
import { useState } from "react";
import { routPath } from "../../Routes/rootpath";
import { setTokenWithExpiry } from "../../utils/helpers";

const Login = () => {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const initialValues = { email: "", password: "" };
  const formValidation = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(3, "Password must be at least 3 characters"),
  });

  const { values, errors, handleChange, handleSubmit, handleBlur, touched } =
    useFormik({
      initialValues,
      validationSchema: formValidation,
      onSubmit: (values) => {
        setLoader(true);
        loginApi(values)
          .then((res) => {
            setLoader(false);
            if (res.status === 200) {
              toast.success(res.data.message);
              navigate(routPath.landing);
              // localStorage.setItem(TOKEN, res.data.user.token);
              setTokenWithExpiry(res.data.user.token, 8 * 60 * 60 * 1000);
            } else {
              toast.error("Login failed");
            }
          })
          .catch((err) => {
            setLoader(false);
            console.log("err", err);
            toast.error(err?.response?.data?.message);
          });
      },
      //   validateOnBlur: false, // Disable validation on blur
      //   validateOnChange: false, // Disable validation on change
    });

  return (
    <div className="login-main">
      <div className="login-body">
        <div className="login-wrap">
          {/* login container */}
          <div className="login-container">
            <div className="wrapper">
              <span className="mb-4">RPP Shop</span>
              <span className="fs-3">Welcome back</span>
              <small className="">Please enter your account details</small>
              <form onSubmit={handleSubmit} className="form-con mt-4">
                <div className="form-grp">
                  <label htmlFor="email">Email</label>
                  <input
                    className={touched.email && errors.email ? "error" : null}
                    id="email"
                    name="email"
                    type="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {touched.email && errors.email ? (
                    <div className="form-error">{errors.email}</div>
                  ) : null}
                </div>
                <div className="form-grp">
                  <label htmlFor="email">Password</label>
                  <input
                    className={
                      touched.password && errors.password ? "error" : null
                    }
                    id="password"
                    name="password"
                    type="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  {touched.password && errors.password ? (
                    <div className="form-error">{errors.password}</div>
                  ) : null}
                </div>
                <div className="form-grp">
                  <Link>Forgot password?</Link>
                </div>
                <div className="btn-grp">
                  <button type="submit">
                    Sign in{" "}
                    {loader && (
                      <img
                        className="rotate-img"
                        src={ImageIcons.loaderIcon}
                        alt="loader"
                      />
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* comp content */}
          <div className="shop-info-container">
            <div className="wrapper">
              <div className="top-con">
                <p className="fs-4 my-4">
                  High-Quality Electrical Components at the Best Prices!
                </p>
                <p className="mt-5">
                  We provide a wide range of electrical components to keep your
                  work running smoothly. Start shopping now!
                </p>
                <div>clients</div>
              </div>

              <div className="bottom-con">
                <strong className="">
                  Trusted by Professionals, Built for Everyone!
                </strong>
                <p className="mt-4">
                  Browse our collection of electrical parts and get everything
                  you need in one place.
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
