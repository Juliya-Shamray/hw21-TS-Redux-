/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { MenuNavigation } from "./components";
import { Cart } from "./components";

export const HeaderFeature = () => (
  <header
    css={css`
      padding: 50px 35px;
    `}
  >
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: space-between;
      `}
    >
      <MenuNavigation />
      <Cart />
    </div>
  </header>
);
