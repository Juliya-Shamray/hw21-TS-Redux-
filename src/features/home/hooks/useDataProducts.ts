import { useEffect, useRef, useState } from "react";
import { ProductInterface } from "../interfaces";

export const useDataProducts = () => {
  const [products, setProducts] = useState([] as ProductInterface[]);
  const [isLoading, setIsloading] = useState(true);

  const isSetTotal = useRef(false);

  const [pagination, setPagination] = useState({
    page: 1,
    total: 10,
    limit: 9,
  });

  const onChangePagination = (event: any, value: number) =>
    setPagination({ ...pagination, page: value });

  useEffect(() => {
    const { limit, page } = pagination;
    const nextSkip = page === 1 ? 0 : (page - 1) * limit;

    fetch(`https://dummyjson.com/products?limit=${limit}&skip=${nextSkip}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setIsloading(false);

        if (!isSetTotal.current) {
          setPagination({
            ...pagination,
            total: Math.ceil(data.total / pagination.limit),
          });
          isSetTotal.current = true;
        }
      });
  }, [pagination.page]);

  return {
    products,
    isLoading,
    onChangePagination,
    pagination,
  };
};
