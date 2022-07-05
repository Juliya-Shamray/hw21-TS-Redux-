/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { ProductInterface } from "../interfaces";
import { ProductItem } from "./ProductItem";

import { useAppDispatch } from "../../../redux/hooks";
import { addProducts } from "../../../redux/slices/cartSlice";

interface Props {
  products: ProductInterface[];
}

export const ProductList = ({ products }: Props) => {
  const dispatch = useAppDispatch();

  const onByeProduct = (product: ProductInterface) => {
    dispatch(addProducts(product));
  };

  return (
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
        gap: 50px;
        justify-content: space-around;
        margin-bottom: 20px;
      `}
    >
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onByeProduct={onByeProduct}
        />
      ))}
    </div>
  );
};
