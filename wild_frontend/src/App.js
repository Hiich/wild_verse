import { BrowserRouter as Router } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AboutWild from "./components/AboutWild/aboutWild";
import Collection from "./components/Collection/collection";
import RoadMap from "./components/RoadMap/roadMap";
import WildXOtherSound from "./components/WildXOtherSound/wildXOtherSound";
import HomePage from "./components/Home/home";
import WithHeaderFooter from "./WithHeaderFooter";

// const Loadable = (Component) => (props) => {
//   return (
//     <Suspense fallback={<></>}>
//       <Component {...props} />
//     </Suspense>
//   );
// };

// const AboutWild = Loadable(
//   lazy(() => import("./components/AboutWild/aboutWild"))
// );

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<WithHeaderFooter Component={HomePage} />}
          />
          <Route
            exact
            path="/collection"
            element={<WithHeaderFooter Component={Collection} />}
          />
          <Route
            exact
            path="/roadmap"
            element={<WithHeaderFooter Component={RoadMap} />}
          />
          <Route
            exact
            path="/aboutwild"
            element={<WithHeaderFooter Component={AboutWild} />}
          />
          <Route
            exact
            path="/wildxothersound"
            element={<WithHeaderFooter Component={WildXOtherSound} />}
          />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
