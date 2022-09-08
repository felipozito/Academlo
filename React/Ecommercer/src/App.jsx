import axios from "axios";
import { useEffect } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./Components/Cart";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import ProductDetail from "./Components/ProductDetail";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import { Purchases } from "./Components/Purchases";

function App() {
      return (
            <div>
                  <Navbar />
                  <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/product/:id" element={<ProductDetail />} />
                        <Route path="/login" element={<Login />} />
                        <Route element={<ProtectedRoutes />}>
                              <Route path="/purchases" element={<Purchases />} />
                              <Route path="/cart" element={<Cart />} />
                        </Route>
                        {/* <Route path="/purchases" element={<Purchases />} /> */}
                        {/* <Route path="/signup" element={<SignUp />} />
                  <Route element={<ProtectedRoutes />} />
                  <Route path="/user" element={<UserInfo />} /> */}
                  </Routes>
            </div>
      );
}

export default App;
