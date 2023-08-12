import React from "react";
import "./Product.css";
import ProductsListing from "../../components/ProductsListing/ProductsListing";
import LeftNav from "../../components/LeftNav/LeftNav";
import { useGlobalHook } from "../../context/Contexts";
import { FiChevronsRight } from "react-icons/fi";
const Product = () => {
  const { leftNav, handleNavIconClick } = useGlobalHook();
  return (
    <div className="home-page">
      {leftNav ? (
        <LeftNav />
      ) : (
        <FiChevronsRight onClick={handleNavIconClick} size={25} />
      )}
      <ProductsListing />
    </div>
  );
};

export default Product;
