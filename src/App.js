import React from "react";
// import { useGlobalHook } from "./context/Contexts";
import Dashboard from "./pages/Dashboard/Dashboard";
import Departments from "./pages/Departments/Departments";
import Product from "./pages/Products/Product";
import Error from "./pages/Error/Error";
import SingleProduct from "./pages/singleProduct/SingleProduct";

import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/product" element={<Product />} />
        <Route path="/details/:id" element={<SingleProduct />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
