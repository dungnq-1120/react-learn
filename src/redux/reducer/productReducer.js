import { actionType } from "../action";

const RootState = {
  products: [],
};

function productReducer(state = RootState, action) {
  switch (action?.type) {
    case actionType.SET_PRODUCT:
      const product = action.payload;
      return {
        ...state,
        products: product,
      };

    default:
      return state;
  }
}

export default productReducer;
