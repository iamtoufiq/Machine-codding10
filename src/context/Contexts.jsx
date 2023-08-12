import React, { createContext, useContext, useEffect, useReducer } from "react";
import { fakeFetch } from "../DataBase";
import reducer from "./Reducer";
const context = createContext();
const initialState = {
  originalData: [],
  temporaryData: [],
  loading: false,
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
  useEffect(() => {
    fetchingData();
  }, []);
  return <context.Provider value={{ ...state }}>{children}</context.Provider>;
};
// Global Hook
const useGlobalHook = () => {
  return useContext(context);
};
export default Contexts;
export { useGlobalHook };
