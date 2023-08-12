import React from "react";
import "./ProductsListing.css";
import Navbar from "../navbar/Navbar";
import ItemListing from "../ItemListing/ItemListing";
const ProductsListing = () => {
  return (
    <div>
      <Navbar />
      <div className="ItemListings">
        <ItemListing />
      </div>
    </div>
  );
};

export default ProductsListing;
