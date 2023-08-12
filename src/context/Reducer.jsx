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
    default:
      return state;
  }
};
export default ProductReducer;
