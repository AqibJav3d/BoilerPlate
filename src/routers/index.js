import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/layout";
import Home from "../pages/home";

const Routers = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default Routers;
