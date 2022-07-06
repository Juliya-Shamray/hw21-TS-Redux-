import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductInterface } from "../interfaces";

export const useDataProduct = () => {
  const [product, setProduct] = useState({} as ProductInterface);
  const { productId, type } = useParams();

  let navigate = useNavigate();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  const onEditProductSubmit = (e: any) => {
    e.preventDefault();

    const title = e.target.title.value;
    const despription = e.target.description.value;

    fetch(`https://dummyjson.com/products/${productId}`, {
      method: "PUT" /* or PATCH */,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        despription,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate(`/product/${productId}`);
      });
  };

  return { product, isEdit: type === "edit", onEditProductSubmit };
};
