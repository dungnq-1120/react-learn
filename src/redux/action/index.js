export const actionType = {
  SET_PRODUCT: "SET_PRODUCT",
};

export const setProductAction = (params) => {
  return {
    type: actionType.SET_PRODUCT,
    payload: params,
  };
};
