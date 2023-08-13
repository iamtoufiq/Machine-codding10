import React, { useState } from "react";
import "./Moddal.css";
import { useGlobalHook } from "../../context/Contexts";
const Modal = () => {
  const { showModal, originalData } = useGlobalHook();
  const [modalData, setModalData] = useState({
    id: originalData?.length + 1,
    department: "Kitchen",
    name: "Stainless Steel Cookware Set",
    description:
      "A set of high-quality stainless steel cookware including pots and pans.",
    price: 149.99,
    stock: 15,
    sku: "KITCH001",
    supplier: "KitchenWonders Inc.",
    delivered: 15,
    imageUrl: "https://m.media-amazon.com/images/I/616vJsA33kL.jpg",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(modalData);
  };
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span
          className="close"
          id="closeModalBtn"
          onClick={() => showModal(false)}
        >
          &times;
        </span>
        <h2>Add New product</h2>
        <form>
          {/* <input type="text" placeholder="Input 1" /> */}
          <span>Department:</span>
          <select name="" id="">
            <option value="">Kitchen</option>
            <option value="">Clothing</option>
            <option value="">Toys</option>
          </select>
          <span>Name:</span>
          <input
            type="text"
            placeholder="Name.."
            value={modalData?.name}
            onChange={(e) => setModalData(e.target.value)}
          />
          <span>Description:</span>
          <textarea
            name=""
            id=""
            cols="30"
            rows="2"
            value={modalData?.description}
            onChange={(e) => setModalData(e.target.value)}
          ></textarea>
          <span>Price:</span>
          <input type="text" placeholder="Price.." value={0} />
          <span>Stock:</span>
          <input type="text" placeholder="Stock.." value={0} />
          <span>SKU:</span>
          <input type="text" placeholder="SKU.." />
          <span>Suppler:</span>
          <input type="text" placeholder="Suppler.." />
          <span>Delivered:</span>
          <input type="text" placeholder="Delivered.." value={0} />
          <span>ImageUrl:</span>
          <input type="text" placeholder="ImageUrl.." />
          <button type="submit" className="button-3" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
