import { useQuery, UseQueryOptions } from "react-query";
import { Product, SearchControllerService } from "../generated";

export const useSearchQuery = (
  text: string,
  options?: UseQueryOptions<Array<Product>>
) => {
  return useQuery({
    queryKey: ["product-search", text],
    queryFn: () => SearchControllerService.searchProductsUsingGet(text),
    ...options,
  });
};

export const useGetProductQuery = (
  usin: string,
  options: UseQueryOptions<Product>
) => {
  return useQuery({
    queryKey: ["product-search-get-by-usin", usin],
    queryFn: () => SearchControllerService.getProductUsingGet(usin),
    ...options,
  });
};
