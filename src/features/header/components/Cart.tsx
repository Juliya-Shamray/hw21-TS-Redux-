/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useAppSelector } from "../../../redux/hooks";

import { selectCart } from "../../../redux/slices/cartSlice";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import { Badge } from "@mui/material";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const { products, total } = useAppSelector(selectCart);

  const [isShowCart, setShowCart] = useState(false);

  const onMouseEnter = () => setShowCart(true);
  const onMouseLeave = () => setShowCart(false);

  return (
    <div
      css={css`
        position: relative;
      `}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Badge badgeContent={total} color="primary">
        <ShoppingCartIcon
          css={css`
            position: relative;
            margin-left: auto;
            cursor: pointer;
          `}
        />
      </Badge>
      {isShowCart && (
        <div
          css={css`
            background: white;
            width: 250px;
            border: 1px solid;
            border-radius: 5px;
            min-height: 50px;
            position: absolute;
            right: 0px;
            padding: 10px;
          `}
        >
          {products.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};
