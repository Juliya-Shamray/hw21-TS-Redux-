/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useDataProduct } from "./hooks";

export const ProductFeature = () => {
  const { category, brand, price, thumbnail, rating, title, description } =
    useDataProduct();

  return (
    <div
      css={css`
        display: flex;
        gap: 100px;
        h2 {
          text-align: center;
          font-size: 25px;
          margin-bottom: 50px;
        }
        span,
        p {
          font-size: 20px;
        }
      `}
    >
      <img src={thumbnail} alt="" />
      <div
        css={css`
          padding: 15px;
        `}
      >
        <h2>{title}</h2>
        <span>CATEGORY: {category}</span>
        <p>BRAND: {brand}</p>
        <p>{description}</p>
        <p>PRICE: {price}</p>
        <span>REATING: {rating}</span>
      </div>
    </div>
  );
};
