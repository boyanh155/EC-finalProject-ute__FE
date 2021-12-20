import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// Context
//Provider for context
import AuthContextProvider from "./contexts/AuthContext";
//Redux
// Provider for redux
import { Provider } from "react-redux";
import store from "./store/store";

import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Attt
import Attt from "./zAttt/Attt";
//
const Auth = React.lazy(() => import("./views/auth/Auth"));

const Home = React.lazy(() => import("./views/Home"));
const Shop = React.lazy(() => import("./views/Shop"));
const Cart = React.lazy(() => import("./views/member/Cart"));
const Book = React.lazy(() => import("./views/member/book"));
const Dashboard = React.lazy(() => import("./views/member/Dashboard"));
const Personalize = React.lazy(() => import("./views/Personalize"));
function App() {
  return (
    <Suspense fallback={<h1>Loading ...</h1>}>
      <Provider store={store}>
        <AuthContextProvider>
          <Router>
            <Routes>
              <Route exact path="/shop" element={<Shop />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/book" element={<Book />} />
              {/* Auth */}
              <Route exact path="/login" element={<Auth authName="login" />} />
              <Route
                exact
                path="/register"
                element={<Auth authName="register" />}
              />
              {/* login or un login */}
              <Route exact path="/dashboard" element={<Dashboard />} />
              {/* Personalize */}
              <Route exact path="/personalize" element={<Personalize />} />
              {/* Attt */}
              <Route exact path="/attt" element={<Attt />} />
              {/* Home */}
              <Route exact path="/" element={<Home />} />
            </Routes>
          </Router>
        </AuthContextProvider>
      </Provider>
    </Suspense>
  );
}
export default App;
