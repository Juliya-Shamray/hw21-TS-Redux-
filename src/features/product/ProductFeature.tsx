/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useDataProduct } from "./hooks";

import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import { ProductForm } from "./components/ProductForm";
import { ProductEdit } from "./components/ProductEdit";

export const ProductFeature = () => {
  const { product, onEditProductSubmit, isEdit } = useDataProduct();

  return (
    <div
      css={css`
        position: relative;
      `}
    >
      {!isEdit && (
        <Link to={`/product/${product.id}/edit`}>
          <EditIcon
            css={css`
              position: absolute;
              right: 0px;
              top: 5px;
            `}
          />
        </Link>
      )}
      {isEdit ? (
        <ProductEdit onSubmit={onEditProductSubmit} product={product} />
      ) : (
        <ProductForm product={product} />
      )}
    </div>
  );
};
