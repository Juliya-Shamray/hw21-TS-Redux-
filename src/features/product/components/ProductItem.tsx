/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { ProductInterface } from "../interfaces";

interface Props {
  product: ProductInterface;
}

export const ProductItem = ({
  product: { title, description, price, thumbnail },
}: Props) => (
  <div
    css={css`
      width: 300px;
      img {
        width: 100%;
        height: 200px;
      }
      border: 1px solid black;
      border-radius: 7px;
      overflow: hidden;
      :hover {
        transform: scale3d(1.1, 1.1, 0.5);
        box-shadow: 0px 0px 7px 3px #403939;
      }
    `}
  >
    <img src={thumbnail} alt="" />
    <div
      css={css`
        padding: 15px;
        h3 {
          text-align: center;
          cursor: pointer;
          :hover {
            color: red;
          }
        }
      `}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);
