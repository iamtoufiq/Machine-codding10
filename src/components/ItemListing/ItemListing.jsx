import React from "react";
import "./ItemListing.css";
import { useGlobalHook } from "../../context/Contexts";

const ItemListing = () => {
  const { temporaryData } = useGlobalHook();

  return (
    <div className="ItemListing">
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Supplier</th>
          </tr>
        </thead>
        <tbody>
          {temporaryData?.map((data, index) => (
            <tr key={index}>
              <td>
                <img className="image-url" src={data.imageUrl} alt="" />
              </td>
              <td>{data.name}</td>
              <td>{data.description}</td>
              <td>{data.price}</td>
              <td>{data.stock}</td>
              <td>{data.supplier}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemListing;
