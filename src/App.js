import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import PrivateRoutes from "./Routes/PrivateRoutes";
import CommonOutlet from "./Routes/CommonOutlet";
import Landing from "./pages/Landing/Landing";
import { routPath } from "./Routes/rootpath";
import Carts from "./pages/Carts/Carts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={routPath.landing} element={<Landing />} />
        <Route
          path={routPath.root}
          element={
            <PrivateRoutes>
              <CommonOutlet />
            </PrivateRoutes>
          }
        >
          <Route path={routPath.root} element={<Home />} />
          <Route path={routPath.cart} element={<Carts />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
