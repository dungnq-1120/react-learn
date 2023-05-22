import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Card from "./component/Card";
import restClient from "./service";

import { setProductAction } from "./redux/action";

function Product() {
  const [isLoading, setIsloading] = useState(false);
  const [meta, setMeta] = useState({
    _limit: 10,
    _page: 1,
    _totalRows: 0,
  });

  const products = useSelector((state) => state.productReducer.products);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProduct(meta);
  }, []);

  async function fetchProduct(params) {
    setIsloading(true);
    try {
      const response = await restClient("get", "products", params);
      // setProducts(response.data.data);
      dispatch(setProductAction(response.data.data));
      // setMeta(response.data.pagination);
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  }

  const handleChangePage = (page) => {
    setMeta({
      ...meta,
      _page: page,
    });
    fetchProduct({
      ...meta,
      _page: page,
    });
  };

  return (
    <div>
      <div>
        <ul className="flex flex-wrap">
          {[...Array(Math.ceil(meta._totalRows / meta._limit))].map(
            (item, index) => {
              return (
                <li onClick={() => handleChangePage(index + 1)}>{index + 1}</li>
              );
            }
          )}
        </ul>
      </div>
      <div className="flex flex-wrap">
        {isLoading ? (
          <h1>LOADING...........</h1>
        ) : (
          products.map((item) => <Card key={item.id} item={item} />)
        )}
      </div>
    </div>
  );
}

export default Product;
