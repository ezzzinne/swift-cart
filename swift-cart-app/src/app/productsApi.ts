import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Product {
    id: number;
    image: string;
    name: string;
    description: string;
    price: number;
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/' }),
    endpoints: (builder) => ({
        getProducts: builder.query<ProductsResponse, void>({
            query: () => 'products.json',
        }),
    }),
});

export const { useGetProductsQuery } = productsApi;