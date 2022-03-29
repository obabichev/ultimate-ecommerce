import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "react-query";
import {
  BoardingControllerService,
  RegisterProductRequestDTO,
  RegisterProductResponseDTO,
} from "../generated/service-boarding";

export const useCreateProductMutation = (
  options?: UseMutationOptions<
    RegisterProductResponseDTO,
    unknown,
    RegisterProductRequestDTO
  >
): UseMutationResult<
  RegisterProductResponseDTO,
  unknown,
  RegisterProductRequestDTO
> => {
  return useMutation({
    mutationFn: BoardingControllerService.registerProductUsingPost,
    ...options,
  });
};
