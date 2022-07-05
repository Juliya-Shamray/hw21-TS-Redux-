/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { ProductList, ProductsSkeleton } from "./components";
import { Pagination } from "./components/Pagination";
import { useDataProducts } from "./hooks";
import { AddProductPopup } from "./components";

export const HomeFeature = () => {
  const { products, isLoading, pagination, onChangePagination } =
    useDataProducts();

  return (
    <div
      css={css`
        margin-bottom: 50px;
      `}
    >
      <AddProductPopup />
      {isLoading ? <ProductsSkeleton /> : <ProductList products={products} />}
      <Pagination onChange={onChangePagination} pagination={pagination} />
    </div>
  );
};
