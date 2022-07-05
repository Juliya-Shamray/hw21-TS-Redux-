/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface Props {
  isError: boolean;
  title: string;
}

export const FieldError = ({ isError, title }: Props) =>
  isError ? (
    <span
      css={css`
        font-size: 15px;
        color: red;
      `}
    >
      {title}
    </span>
  ) : (
    <></>
  );
