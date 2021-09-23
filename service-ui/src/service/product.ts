import {
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from "react-query";
import {
  BuyProductRequestDTO,
  Product,
  ProductControllerService,
  UserPurchase,
} from "../generated";

export const useGetProducts = (options?: UseQueryOptions<Array<Product>>) => {
  return useQuery({
    queryKey: "products",
    queryFn: ProductControllerService.getProductsUsingGet,
    ...options,
  });
};

export const getUseGetProductQueryKey = (id: string) => ["product", id];

export const useGetProduct = (
  id: string,
  options?: UseQueryOptions<Product>
) => {
  return useQuery({
    queryKey: getUseGetProductQueryKey(id),
    queryFn: () => ProductControllerService.getProductUsingGet(id),
    ...options,
  });
};

export const useBuyProductsMutation = (
  options?: UseMutationOptions<UserPurchase, unknown, BuyProductRequestDTO>
) => {
  return useMutation({
    mutationFn: ProductControllerService.buyProductsUsingPost,
    ...options,
  });
};
