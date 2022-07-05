/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Button, TextField } from "@mui/material";
import { useAddProduct } from "../hooks";
import { FieldError } from "./FieldError";

interface Props {
  handleClose: () => void;
}

export const AddProductForm = ({ handleClose }: Props) => {
  const { onSubmitAddProduct, errors } = useAddProduct(handleClose);

  return (
    <form
      onSubmit={onSubmitAddProduct}
      css={css`
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 300px;
        margin-top: 10px;
      `}
    >
      <TextField
        error={errors.title}
        name="title"
        label="Title"
        variant="outlined"
      />
      <FieldError
        isError={errors.title}
        title="The title must contain Latin characters, be from 5 to 20 characters long"
      />
      <TextField
        error={errors.description}
        name="description"
        label="Description"
        variant="outlined"
      />
      <FieldError
        isError={errors.description}
        title="Description field length must be between 10 and 100 characters"
      />
      <Button type="submit" variant="outlined">
        Create
      </Button>
    </form>
  );
};
