/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const PageFeature = ({ children }: any) => (
  <div
    css={css`
      width: 1200px;
      margin: auto;
    `}
  >
    {children}
  </div>
);
