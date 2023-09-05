import { takeLeading, call, put } from "redux-saga/effects";
import { FALL, PRODUCT_ACTION_TYPE, REQUEST, SUCCESS } from "../action/constant";
import restClient from "../../services/restClient";
import { setProduct, setProductFall } from "../action";
import { IProduct } from "../../types";
import { IMeta } from "../../App";

function* getProductSaga() {
  try {
    const res: {
      data: IProduct[];
      pagination: IMeta;
    } = yield call(restClient, {
      url: "/products",
      params: {
        _page: 1,
      },
    });
    yield put(setProduct(res));
  } catch (error) {
    yield put(setProductFall());
  }
}

function* sagaCart() {
  yield takeLeading(REQUEST(PRODUCT_ACTION_TYPE.SET_PRODUCT), getProductSaga);
  // yield takeLeading(FALL(PRODUCT_ACTION_TYPE.SET_PRODUCT), getProductSaga);
  // yield takeLeading(SUCCESS(PRODUCT_ACTION_TYPE.SET_PRODUCT), getProductSaga);
}

export default sagaCart