import { OryFlow } from "../auth.types";
import { request as __request } from "../generated/core/request";
import { useMutation, useQuery, UseQueryOptions } from "react-query";

export const fetchRegistrationFlowRest = async (): Promise<OryFlow> => {
  const result = await __request({
    method: "GET",
    path: `/self-service/registration/browser`,
    errors: {
      401: `Unauthorized`,
      403: `Forbidden`,
      404: `Not Found`,
    },
  });
  return result.body;
};

export const useGetRegistrationFlowRestMutation = (
  options?: UseQueryOptions<OryFlow>
) => {
  return useMutation({
    // queryKey: ["get-registration-flow-rest"],
    mutationFn: () => fetchRegistrationFlowRest(),
    ...options,
  });
};
