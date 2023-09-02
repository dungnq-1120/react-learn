import { useState, useRef, useEffect } from "react";
import { Col, Pagination, Row, Spin, Input, Button } from "antd";
import "./App.css";
import "../src/lib/antd/customAntd.css";

import { useSearchParams } from "react-router-dom";

import useDidMount from "./hooks/useDidMount";
import restClient from "./services/restClient";
import CartItem, { ICardItemProps } from "./components/cartItem";
import { isEmpty } from "lodash";
import { getCartsApi } from "./services/cartApi";
import { useAppDispatch, useAppSelector } from "./utils/reduxHelper";
import { setProduct, setProductFall, setProductRequest } from "./redux/action";

export interface IMeta {
  _limit: number;
  _totalRows: number;
  _page: number;
  title_like?: string;
}

function App() {
  const [carts, setCarts] = useState<ICardItemProps[]>([]);
  const productsReducer = useAppSelector((state) => state.products);

  const dispatch = useAppDispatch();

  async function getProduct() {
    try {
      dispatch(setProductRequest());
      const res = await restClient({
        url: "/products",
        params: productsReducer.meta,
      });
      dispatch(setProduct(res));
    } catch (error) {
      alert("error");
      dispatch(setProductFall());
    }
  }

  async function getCarts() {
    const res = await getCartsApi();
    setCarts(res);
  }

  useDidMount(() => {
    getProduct();
    getCarts();
  });
  console.log(productsReducer.isLoading);

  return (
    <>
      <h1>Carts: {carts.length}</h1>
      {!isEmpty(productsReducer.data) && (
        <Row id="ref">
          {productsReducer.data.map((product, index) => (
            <Col key={index} xs={6}>
              <CartItem
                product={product}
                carts={carts}
                getCarts={() => getCarts()}
              />
            </Col>
          ))}
        </Row>
      )}
      {productsReducer.isLoading && <Spin />}
      {/* {/* <div ref={refList}></div> */}
      {/* <Counter/> */}
    </>
  );
}

export default App;
