/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { ProductInterface } from "../interfaces";
import { ProductItem } from "./ProductItem";

interface Props {
  products: ProductInterface[];
}

export const ProductList = ({ products }: Props) => (
  <div
    css={css`
      display: flex;
      flex-wrap: wrap;
      gap: 50px;
      justify-content: space-around;
    `}
  >
    {products.map((product) => (
      <ProductItem key={product.id} product={product} />
    ))}
  </div>
);
