import { useEffect, useState } from "react";
import {
  Col,
  Pagination,
  Row,
  Spin,
  Input
} from "antd";
import "./App.css";
import "../src/lib/antd/customAntd.css";

import useDidMount from "./hooks/useDidMount";
import restClient from "./restClient";
import CartItem, { ICardItemProps } from "./components/cartItem";
import FormFilter from "./components/FormFilter";

interface IMeta {
  _limit: number;
  _totalRows: number;
  _page: number;
}

function App() {
  const [products, setProduct] = useState<ICardItemProps[]>([]);
  const [meta, setMeta] = useState<IMeta>({
    _limit: 8,
    _totalRows: 0,
    _page: 1,
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function getProduct(metaProps?: IMeta) {
    try {
      setIsLoading(true);
      const res = await restClient({
        url: "/products",
        params: metaProps || meta,
      });
      setProduct(res.data);
      setMeta(res.pagination);
    } catch (error) {
      alert("error");
    } finally {
      setIsLoading(false);
    }
  }

  useDidMount(getProduct);

  return (
    <>
      <FormFilter getProduct={() => getProduct()}/>
      <Row>
      </Row>
      {products.length > 0 && (
        <Pagination
          defaultPageSize={10}
          total={meta._totalRows}
          onChange={(page) =>
            getProduct({
              ...meta,
              _page: page,
            })
          }
        />
      )}
      {isLoading ? (
        <Spin />
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product.title} xs={6}>
              <CartItem title={product.title} image={product?.image} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
}

export default App;
