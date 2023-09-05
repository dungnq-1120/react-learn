// import { useState, useRef, useEffect } from "react";
// import { Col, Pagination, Row, Spin, Input, Button } from "antd";
// import "./App.css";
// import "../src/lib/antd/customAntd.css";

import { counterSelector } from "./reduxToolkit/selector"
import { actionCommon, addCount, subCount } from "./reduxToolkit/slice"
import { fetchUserByIdThunk } from "./reduxToolkit/thunk"
import { useAppDispatch, useAppSelector } from "./utils/reduxHelper"

// import { useSearchParams } from "react-router-dom";

// import useDidMount from "./hooks/useDidMount";
// import restClient from "./services/restClient";
// import CartItem, { ICardItemProps } from "./components/cartItem";
// import { isEmpty } from "lodash";
// import { getCartsApi } from "./services/cartApi";
// import { useAppDispatch, useAppSelector } from "./utils/reduxHelper";
// import { setProduct, setProductFall, setProductRequest } from "./redux/action";
// import { PRODUCT_ACTION_TYPE } from "./redux/action/constant";

// export interface IMeta {
//   _limit: number;
//   _totalRows: number;
//   _page: number;
//   title_like?: string;
// }

// function App() {
//   const [carts, setCarts] = useState<ICardItemProps[]>([]);
//   const productsReducer = useAppSelector((state) => state.products);

//   const dispatch = useAppDispatch();

//   async function getCarts() {
//     const res = await getCartsApi();
//     setCarts(res);
//   }

//   useDidMount(() => {
//     dispatch(setProductRequest())
//     getCarts();
//   });
//   console.log(productsReducer.isLoading);

//   return (
//     <>
//       <h1>Carts: {carts.length}</h1>
//       <button onClick={() => {
//         dispatch({
//           type: PRODUCT_ACTION_TYPE.TESTING
//         })
//       }}>Test</button>
//       {!isEmpty(productsReducer.data) && (
//         <Row id="ref">
//           {productsReducer.data.map((product, index) => (
//             <Col key={index} xs={6}>
//               <CartItem
//                 product={product}
//                 carts={carts}
//                 getCarts={() => getCarts()}
//               />
//             </Col>
//           ))}
//         </Row>
//       )}
//       {productsReducer.isLoading && <Spin />}
//       {/* {/* <div ref={refList}></div> */}
//       {/* <Counter/> */}
//     </>
//   );
// }

// export default App;

export default function App() {
  const count = useAppSelector(counterSelector)
  const dispatch = useAppDispatch()
  
  return <div>
    <button onClick={() => dispatch(fetchUserByIdThunk(10))}>ADD</button>
    <button onClick={() => dispatch(subCount())}>SUB</button>
    <button onClick={() => dispatch(actionCommon())}>Common</button>
    <h1>{count}</h1>
  </div>
}