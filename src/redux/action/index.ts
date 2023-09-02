import { IMeta } from "../../App";
import { IProduct } from "../../types";
import { ActionType } from "../reducer/productReducer";
import { FALL, PRODUCT_ACTION_TYPE, REQUEST, SUCCESS } from "./constant";

export const addCounter = (params: number): ActionType<number> => ({
  type: PRODUCT_ACTION_TYPE.ADD_COUNTER_TYPE,
  payload: params,
});

export const setProduct = (params: {
  data: IProduct[];
  pagination: IMeta;
}): ActionType<{
  data: IProduct[];
  pagination: IMeta;
}> => ({
  type: SUCCESS(PRODUCT_ACTION_TYPE.SET_PRODUCT),
  payload: params,
});

export const setProductRequest = (): ActionType<any> => ({
  type: REQUEST(PRODUCT_ACTION_TYPE.SET_PRODUCT),
});

export const setProductFall = (): ActionType<any> => ({
  type: FALL(PRODUCT_ACTION_TYPE.SET_PRODUCT),
});
