import { act } from "react-dom/test-utils";

const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_ORIGINAL_DATA":
      return {
        ...state,
        originalData: action.payload,
        temporaryData: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "REMOVE_LOADING":
      return {
        ...state,
        loading: false,
      };
    case "SET-LEFT-NAV":
      return {
        ...state,
        leftNav: !state.leftNav,
      };
    case "UPDATING-ON-DEPART-BASE":
      return {
        ...state,
        temporaryData: action.payload,
      };
    case "UPDATING-ON-CHECKED":
      return {
        ...state,
        temporaryData: [...action.payload],
      };
    case "UPDATING-POPUP-MODAL":
      return {
        ...state,
        showingModal: action.payload,
      };
    case "UPDATING-ON-NAME":
      console.log("check", action.payload);
      return {
        ...state,
        temporaryData: [...action.payload],
        originalData: [...action.payload],
      };

    default:
      return state;
  }
};
export default ProductReducer;
