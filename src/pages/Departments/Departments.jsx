import React from "react";
import "./Departments.css";
import LeftNav from "../../components/LeftNav/LeftNav";
import DepartmentsHome from "../../components/DepartmentsHome/DepartmentsHome";
import { FiChevronsRight } from "react-icons/fi";
import { useGlobalHook } from "../../context/Contexts";
const Departments = () => {
  const { leftNav, handleNavIconClick } = useGlobalHook();
  return (
    <div className="home-page">
      {leftNav ? (
        <LeftNav />
      ) : (
        <FiChevronsRight onClick={handleNavIconClick} size={25} />
      )}
      <DepartmentsHome />
    </div>
  );
};

export default Departments;
