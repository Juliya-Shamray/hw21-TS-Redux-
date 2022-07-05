/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import { ProductInterface } from "../interfaces";

interface Props {
  product: ProductInterface;
  onByeProduct: (product: ProductInterface) => void;
}

export const ProductItem = ({ product, onByeProduct }: Props) => {
  const { id, title, description, thumbnail, price } = product;
  return (
    <div
      css={css`
        width: 300px;
        display: flex;
        flex-direction: column;
        img {
          width: 100%;
          height: 200px;
        }
        border: 1px solid black;
        border-radius: 7px;
        overflow: hidden;
        :hover {
          box-shadow: 0px 0px 7px 3px #403939;
        }
      `}
    >
      <img src={thumbnail} alt="" />
      <div
        css={css`
          padding: 15px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          h3 {
            color: black;
            text-align: center;
            cursor: pointer;
            :hover {
              color: red;
            }
          }
        `}
      >
        <Link to={`/product/${id}`}>
          <h3>{title}</h3>
        </Link>

        <p
          css={css`
            flex-grow: 1;
          `}
        >
          {description}
        </p>
        <p>Price:{price}</p>

        <div
          css={css`
            .MuiButton-root {
              padding: 0px 20px;
            }
            display: flex;
            justify-content: flex-end;
          `}
        >
          <Button onClick={() => onByeProduct(product)} variant="outlined">
            Bye
          </Button>
        </div>
      </div>
    </div>
  );
};
