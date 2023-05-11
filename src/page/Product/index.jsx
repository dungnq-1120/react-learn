import { useEffect } from "react";
import fetchRequest from "../../restClient";

export default function Product() {
  useEffect(() => {
    fetchRequest("http://localhost:8000/products", "get")
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  });

  return <h1>Product</h1>;
}
