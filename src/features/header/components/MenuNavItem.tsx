/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

interface Props {
  item: { id: number; name: string; url: string };
}

export const MenuNavItem = ({ item: { id, url, name } }: Props) => (
  <li>
    <Link
      css={css`
        color: black;
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 24px;
        :hover {
          text-decoration: underline;
        }
      `}
      to={url}
    >
      {name}
    </Link>
  </li>
);
