import React from "react";
import "./SingleProduct.css";
import { useParams } from "react-router-dom";
import { useGlobalHook } from "../../context/Contexts";
const SingleProduct = () => {
  const { originalData } = useGlobalHook();
  const { id: ids } = useParams();
  const filteringSingleProduct = originalData?.find((data) => {
    return data.id === +ids;
  });
  console.log(filteringSingleProduct);

  return (
    !!filteringSingleProduct && (
      <div className="outer-div">
        <h2>{filteringSingleProduct.name}</h2>
        <img
          src={filteringSingleProduct.imageUrl}
          alt={filteringSingleProduct.name}
        />
        <p>Price: {filteringSingleProduct.price}</p>
        <div className="flex">
          <p>Stoke: {filteringSingleProduct.stock}</p>
          <p>Supplier: {filteringSingleProduct.supplier}</p>
          <p>Department: {filteringSingleProduct.department}</p>
          <p>SKU: {filteringSingleProduct.sku}</p>
          <p>Delivered: {filteringSingleProduct.delivered}</p>
          <p>Description: {filteringSingleProduct.description}</p>
        </div>
      </div>
    )
  );
};

export default SingleProduct;
