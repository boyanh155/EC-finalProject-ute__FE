import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/toppage/Login";
import Home from "./views/Home";
import Shop from "./components/toppage/Shop";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
export default App;
