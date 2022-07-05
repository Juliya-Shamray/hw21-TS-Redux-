/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { AddProductForm } from "./AddProductForm";
import { useState } from "react";

export const AddProductPopup = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        startIcon={<ControlPointIcon />}
        css={css`
          margin: 20px 35px;
        `}
      >
        Add product
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          css={css`
            text-align: center;
          `}
          id="alert-dialog-title"
        >
          Add new product
        </DialogTitle>
        <DialogContent>
          <AddProductForm handleClose={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
};
