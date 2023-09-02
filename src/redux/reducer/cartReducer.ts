import { IMeta } from "../../App";
import {
  FALL,
  PRODUCT_ACTION_TYPE,
  SUCCESS,
} from "../action/constant";

export interface CartStateType {
  data: any
}

export interface ActionType<T> {
  type: string;
  payload?: T;
}

const reducerInit: CartStateType = {
  data: {}
};

export default function (state = reducerInit, action: ActionType<any>) {
  switch (action.type) {
    case SUCCESS(PRODUCT_ACTION_TYPE.SET_PRODUCT):
      return state;
    case FALL(PRODUCT_ACTION_TYPE.SET_PRODUCT):
      return {
        ...state,
      };
    default:
      return state;
  }
}
