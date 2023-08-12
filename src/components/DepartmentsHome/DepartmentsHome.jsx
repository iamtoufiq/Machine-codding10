import React from "react";
import "./DepartmentsHome.css";
// import "./DashboardHome.css";
import "../DashboardHome/DashboardHome.css";
import { useGlobalHook } from "../../context/Contexts";
const DepartmentsHome = () => {
  const { temporaryData, loading } = useGlobalHook();
  const uniqueDepartments = [
    ...new Set(temporaryData.map((data) => data?.department)),
  ];
  console.log(uniqueDepartments);

  return loading ? (
    <h1>Loading..</h1>
  ) : (
    <div className="outer" style={{ border: "2px solid blue" }}>
      {uniqueDepartments?.map((department, index) => {
        return (
          <div className="box" key={index}>
            <h3>{department}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default DepartmentsHome;
