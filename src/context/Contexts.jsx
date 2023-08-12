import React, { createContext, useContext, useEffect, useReducer } from "react";
import { fakeFetch } from "../DataBase";
import reducer from "./Reducer";
const context = createContext();
const initialState = {
  originalData: [],
  temporaryData: [],
  loading: false,
  leftNav: true,
};
const Contexts = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchingData = async () => {
    dispatch({ type: "SET_LOADING" });
    const { data } = await fakeFetch("https://example.com/api/videos");
    console.log(data?.inventoryData);
    dispatch({ type: "SET_ORIGINAL_DATA", payload: data?.inventoryData });
    dispatch({ type: "REMOVE_LOADING" });
  };

  const handleNavIconClick = () => {
    dispatch({ type: "SET-LEFT-NAV" });
  };
  //filtering on the base of departmnet
  const filtingOnDepartmnetBase = (depart) => {
    if (depart === "All Department") return;
    let filtered = state.temporaryData.filter((data) => {
      return data.department === depart;
    });
    dispatch({ type: "UPDATING-ON-DEPART-BASE", payload: filtered });
  };
  useEffect(() => {
    fetchingData();
  }, []);
  return (
    <context.Provider
      value={{ ...state, handleNavIconClick, filtingOnDepartmnetBase }}
    >
      {children}
    </context.Provider>
  );
};
// Global Hook
const useGlobalHook = () => {
  return useContext(context);
};
export default Contexts;
export { useGlobalHook };
