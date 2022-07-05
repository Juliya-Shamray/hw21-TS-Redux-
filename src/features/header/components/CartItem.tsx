/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface Props {
  item: { id: number; title: string; count?: number; price: number };
}

export const CartItem = ({ item: { id, title, price, count } }: Props) => (
  <ul
    css={css`
      margin-bottom: 30px;
      :last-child {
        margin-bottom: 10px;
      }
      li {
        margin: 5px;
        :first-of-type {
          text-transform: uppercase;
          font-weight: bold;
        }
      }
    `}
  >
    <li>{title}</li>
    <li>Price: {price}</li>
    <li>Quantity :{count}</li>
  </ul>
);
