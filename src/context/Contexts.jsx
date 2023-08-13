import React, { createContext, useContext, useEffect, useReducer } from "react";
import { fakeFetch } from "../DataBase";
import reducer from "./Reducer";
const context = createContext();
const initialState = {
  originalData: [],
  temporaryData: [],
  loading: false,
  leftNav: true,
  showingModal: false,
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
  // handle to show modal
  const showModal = (value) => {
    dispatch({
      type: "UPDATING-POPUP-MODAL",
      payload: value,
    });
  };
  //filtering on the base of departmnet
  const filtingOnDepartmnetBase = (depart) => {
    console.log(depart);
    if (depart === "All Department") {
      dispatch({
        type: "UPDATING-ON-DEPART-BASE",
        payload: state?.originalData,
      });
    } else {
      let filtered = state.originalData.filter((data) => {
        return data.department === depart;
      });
      dispatch({ type: "UPDATING-ON-DEPART-BASE", payload: filtered });
    }
  };
  // shorting on the base of the price , name and catergory
  const shorting = (property) => {
    let sortedData = [...state.temporaryData];

    switch (property) {
      case "name":
        sortedData.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "price":
        sortedData.sort((a, b) => a.price - b.price);
        break;
      case "stock":
        sortedData.sort((a, b) => a.stock - b.stock);
        break;
      default:
        break;
    }

    // Now you can use the sortedData array
    dispatch({ type: "UPDATING-ON-NAME", payload: sortedData });
    console.log(sortedData);
    // ... further logic ...
  };
  // showing low stock item
  const showLowStock = (e) => {
    if (e.target.checked) {
      let checkedVal = state?.temporaryData?.filter((data) => {
        return data.stock <= 10;
      });
      console.log(checkedVal);
      dispatch({ type: "UPDATING-ON-CHECKED", payload: checkedVal });
    } else {
      dispatch({ type: "UPDATING-ON-CHECKED", payload: state?.originalData });
    }
  };
  useEffect(() => {
    fetchingData();
  }, []);
  return (
    <context.Provider
      value={{
        ...state,
        handleNavIconClick,
        filtingOnDepartmnetBase,
        showLowStock,
        shorting,
        showModal,
      }}
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
