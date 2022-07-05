export interface ProductInterface {
  id: number;
  description: string;
  thumbnail: string;
  title: string;
  price: number;
}

export interface PaginationInterface {
  limit: number;
  total: number;
  page: number;
}
