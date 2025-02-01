import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import PrivateRoutes from "./Routes/PrivateRoutes";
import CommonOutlet from "./Routes/CommonOutlet";
import Landing from "./pages/Landing/Landing";
import { routPath } from "./Routes/rootpath";
import Carts from "./pages/Carts/Carts";
import Login from "./pages/Login/Login";
import CreateProduct from "./pages/AdminPages/CreateProduct/CreateProduct";

function App() {
  return (
    <Router>
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

export default App;
