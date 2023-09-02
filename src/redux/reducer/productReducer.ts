import { IMeta } from "../../App";
import { IProduct } from "../../types";
import { FALL, PRODUCT_ACTION_TYPE, REQUEST, SUCCESS } from "../action/constant";

export interface ProductsStateType {
  isLoading: boolean;
  data: IProduct[];
  meta: IMeta;
}

export interface ActionType<T> {
  type: string;
  payload?: T;
}

const reducerInit: ProductsStateType = {
  data: [],
  meta: {
    _limit: 8,
    _totalRows: 0,
    _page: 0,
    title_like: "",
  },
  isLoading: false,
};

export default function (state = reducerInit, action: ActionType<any>) {
  switch (action.type) {
    case SUCCESS(PRODUCT_ACTION_TYPE.SET_PRODUCT):
      return {
        ...state,
        data: [...action.payload.data],
        meta: {
          ...action.payload.pagination,
        },
        isLoading: false,
      };
    case REQUEST(PRODUCT_ACTION_TYPE.SET_PRODUCT):
      return {
        ...state,
        isLoading: true,
      };
    case FALL(PRODUCT_ACTION_TYPE.SET_PRODUCT):
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
