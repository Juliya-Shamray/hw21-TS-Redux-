/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Button, TextField } from "@mui/material";
import { ProductInterface } from "../interfaces";

interface Props {
  product: ProductInterface;
  onSubmit: (e: any) => void;
}

export const ProductEdit = ({
  product: { title, description },
  onSubmit,
}: Props) => (
  <form
    css={css`
      width: 1000px;
      margin: auto;
      display: flex;
      gap: 30px;
      flex-direction: column;
      border: 2px solid black;
      border-radius: 20px;
      padding: 100px;
      label {
        margin-bottom: 30px;
        width: auto;
      }
    `}
    onSubmit={onSubmit}
  >
    <TextField name="title" defaultValue={title} multiline />
    <TextField
      multiline
      rows={4}
      name="description"
      defaultValue={description}
    />
    <Button
      css={css`
        width: 150px;
        align-self: center;
      `}
      type="submit"
      variant="contained"
    >
      Save
    </Button>
  </form>
);
