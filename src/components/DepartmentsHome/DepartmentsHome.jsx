import React from "react";
import "./DepartmentsHome.css";
import "../DashboardHome/DashboardHome.css";
import { useGlobalHook } from "../../context/Contexts";
import { useNavigate } from "react-router-dom";
const DepartmentsHome = () => {
  const navigate = useNavigate();
  const { loading, filtingOnDepartmnetBase, originalData } = useGlobalHook();
  const uniqueDepartments = [
    ...new Set(originalData.map((data) => data?.department)),
  ];
  console.log(uniqueDepartments);
  const filteringOnCat = (department) => {
    console.log(department);
    filtingOnDepartmnetBase(department);
  };
  return loading ? (
    <h1>Loading..</h1>
  ) : (
    <div className="outer" style={{ border: "2px solid blue" }}>
      {uniqueDepartments?.map((department, index) => {
        return (
          <div
            className="box"
            key={index}
            onClick={() => {
              navigate("/product");
              filteringOnCat(department);
            }}
          >
            <h3>{department}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default DepartmentsHome;
