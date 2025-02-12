import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import PrivateRoutes from "./Routes/PrivateRoutes";
import CommonOutlet from "./Routes/CommonOutlet";
import Landing from "./pages/Landing/Landing";
import { routPath } from "./Routes/rootpath";
import Carts from "./pages/Carts/Carts";
import Login from "./pages/Login/Login";
import CreateProduct from "./pages/AdminPages/CreateProduct/CreateProduct";
// import useAuthCheck from "./pages/Authentication/useAuthCheck";
import { useEffect } from "react";
import { TOKEN } from "./constant/localStorage";
import { toast } from "react-toastify";

function App() {
  // useAuthCheck(); // Runs on app load to check token
  return (
    <Router>
      <AuthHandler />
      <Routes>
        <Route path={routPath.login} element={<Login />} />
        <Route path={routPath.root} element={<Landing />} />
        <Route
          path={routPath.root}
          element={
            <PrivateRoutes>
              <CommonOutlet />
            </PrivateRoutes>
          }
        >
          <Route path={routPath.landing} element={<Landing />} />
          <Route path={routPath.home} element={<Home />} />
          <Route path={routPath.cart} element={<Carts />} />
          <Route path={routPath.createProduct} element={<CreateProduct />} />
        </Route>
      </Routes>
    </Router>
  );
}
const AuthHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem(TOKEN);
      const expiryTimestamp = localStorage.getItem("tokenExpiry");

      if (!token || !expiryTimestamp || Date.now() > expiryTimestamp) {
        localStorage.removeItem(TOKEN);
        localStorage.removeItem("tokenExpiry");
        console.log("Token expired. Redirecting to login...");
        // navigate("/login");
        toast.error("Token expired. Please login");
      }
    };

    // ✅ Check token immediately on load
    checkToken();

    // ✅ Also check token every 30 seconds
    // const interval = setInterval(checkToken, 30000);

    // return () => clearInterval(interval); // Cleanup on unmount
  }, [navigate]);

  return null;
};

export default App;
