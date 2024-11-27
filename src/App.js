import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import PrivateRoutes from "./Routes/PrivateRoutes";
import CommonOutlet from "./Routes/CommonOutlet";
import Landing from "./pages/Landing/Landing";
import { routpath } from "./Routes/rootpath";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={routpath.landing} element={<Landing />} />
        <Route
          path={routpath.root}
          element={
            <PrivateRoutes>
              <CommonOutlet />
            </PrivateRoutes>
          }
        >
          <Route path={routpath.root} element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
