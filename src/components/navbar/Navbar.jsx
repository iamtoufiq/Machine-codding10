import React, { useState } from "react";
import "./Navbar.css";
import { useGlobalHook } from "../../context/Contexts";
import Modal from "../Modal/Modal";
const Navbar = () => {
  const {
    filtingOnDepartmnetBase,
    originalData,
    showLowStock,
    shorting,
    showModal,
    showingModal,
  } = useGlobalHook();
  const uniqueDepartments = [
    ...new Set(originalData.map((data) => data?.department)),
  ];
  const [selectedDepartment, setSelectedDepartment] =
    useState("All Department");
  const [selectedFil, setselectedFil] = useState("name");

  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value);
    filtingOnDepartmnetBase(e.target.value);
  };
  const ourShorting = (e) => {
    shorting(e.target.value);
  };
  console.log("navbar", showingModal);
  return (
    <div className="navbar">
      {showingModal && <Modal />}
      <h2>Products</h2>
      <div className="drop-down">
        <select
          className="select"
          onChange={(e) => {
            handleDepartmentChange(e);
            setSelectedDepartment(e.target.value);
          }}
          value={selectedDepartment}
        >
          <option value="All Department">All Department</option>
          {uniqueDepartments?.map((department, index) => (
            <option key={index} value={department}>
              {department}
            </option>
          ))}
        </select>
      </div>
      <div className="checkbox">
        <input type="checkbox" onChange={showLowStock} /> low
      </div>
      <div className="right-drop-down">
        <select
          className="select"
          onChange={(e) => {
            ourShorting(e);
            setselectedFil(e.target.value);
          }}
          value={selectedFil}
        >
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="stock">Stock</option>
        </select>
      </div>

      <button className="button-3" onClick={() => showModal(true)}>
        New
      </button>
    </div>
  );
};

export default Navbar;
