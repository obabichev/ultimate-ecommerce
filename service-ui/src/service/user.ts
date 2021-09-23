import { useMutation, UseMutationOptions } from "react-query";
import {
  GetOrCreateUserRequestDTO,
  User,
  UserControllerService,
} from "../generated";

export const useGetOrCreateUserMutation = (
  options?: UseMutationOptions<User, unknown, GetOrCreateUserRequestDTO>
) => {
  return useMutation({
    mutationFn: UserControllerService.getOrCreateUserUsingPost,
    ...options,
  });
};
