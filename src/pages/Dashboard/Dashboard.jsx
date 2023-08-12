import React from "react";
import "./Dashboard.css";
import LeftNav from "../../components/LeftNav/LeftNav";
import DashboardHome from "../../components/DashboardHome/DashboardHome";
import { useGlobalHook } from "../../context/Contexts";
import { FiChevronsRight } from "react-icons/fi";
const Dashboard = () => {
  const { leftNav, handleNavIconClick } = useGlobalHook();
  return (
    <div className="home-page">
      {leftNav ? (
        <LeftNav />
      ) : (
        <FiChevronsRight
          onClick={handleNavIconClick}
          size={25}
          style={!leftNav ? { gridTemplateColumns: "100%" } : {}}
        />
      )}
      <DashboardHome />
    </div>
  );
};

export default Dashboard;
