export const PRODUCT_ACTION_TYPE = {
  ADD_COUNTER_TYPE: "ADD_COUNTER",
  SET_PRODUCT: "SET_PRODUCT",
};

export const REQUEST = (type: string) => `${type}_REQUEST`;
export const SUCCESS = (type: string) => `${type}_SUCCESS`;
export const FALL = (type: string) => `${type}_FALL`;
