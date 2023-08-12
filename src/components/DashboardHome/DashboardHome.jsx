import React from "react";
import "./DashboardHome.css";
import { useGlobalHook } from "../../context/Contexts";
const DashboardHome = () => {
  const { temporaryData, loading } = useGlobalHook();

  const totalStock = temporaryData
    .map((data) => data?.stock ?? 0)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const totalDelivered = temporaryData
    .map((data) => data?.delivered ?? 0)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const lowStockItemsCount = temporaryData
    .map((data) => (data.delivered <= 10 ? 1 : 0))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  console.log(lowStockItemsCount);
  return loading ? (
    <h1>Loading..</h1>
  ) : (
    <div className="outer" style={{ border: "2px solid blue" }}>
      <div className="box">
        <h2 style={{ color: "#00b000" }}>{temporaryData && totalStock}</h2>
        <h3>Total Stoke</h3>
      </div>
      <div className="box">
        <h2 style={{ color: "#fea100 " }}>{temporaryData && totalDelivered}</h2>
        <h3>Total Delivered</h3>
      </div>
      <div className="box">
        <h2 style={{ color: "#fe0000" }}>{lowStockItemsCount}</h2>
        <h3>Low Stoke Items</h3>
      </div>
    </div>
  );
};

export default DashboardHome;
