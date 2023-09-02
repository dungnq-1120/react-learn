import { combineReducers } from "redux";
import products, { ProductsStateType } from "./productReducer";
import carts, { CartStateType } from "./cartReducer";

interface ReducerStateType {
  readonly products: ProductsStateType;
  readonly carts: CartStateType;
}

const rootReducer = combineReducers<ReducerStateType>({
  products,
  carts,
});

export default rootReducer