/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import PaginationMU from "@mui/material/Pagination";
import { PaginationInterface } from "../interfaces";

interface Props {
  onChange: (e: any, value: number) => void;
  pagination: PaginationInterface;
}

export const Pagination = ({
  onChange,
  pagination: { page, total },
}: Props) => (
  <div
    css={css`
      display: flex;
      justify-content: center;
    `}
  >
    <PaginationMU
      onChange={onChange}
      page={page}
      count={total}
      variant="outlined"
      shape="rounded"
    />
  </div>
);
