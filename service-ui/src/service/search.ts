import { useQuery, UseQueryOptions } from "react-query";
import {
  Product,
  SearchControllerService,
  Tag,
  TagControllerService,
} from "../generated";

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

export const useGetTags = (options?: UseQueryOptions<Tag[]>) => {
  return useQuery({
    queryKey: ["get-tags"],
    queryFn: () => TagControllerService.getTagsUsingGet(),
    ...options,
  });
};
