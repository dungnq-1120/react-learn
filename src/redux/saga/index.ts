import { fork } from "redux-saga/effects";
import sagaProduct from "./product.saga";
import sagaCart from "./cart.saga";

function* mySaga() {
  yield fork(sagaProduct)
  yield fork(sagaCart)
}

export default mySaga;
