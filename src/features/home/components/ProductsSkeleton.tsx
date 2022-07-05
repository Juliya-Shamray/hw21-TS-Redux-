/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Skeleton } from "@mui/material";

export const ProductsSkeleton = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
        gap: 50px;
        justify-content: space-around;
      `}
    >
      {data.map((key) => (
        <div key={key}>
          <Skeleton variant="rectangular" width={300} height={200} />
          <Skeleton variant="text" width={300} height={180} />
        </div>
      ))}
    </div>
  );
};
