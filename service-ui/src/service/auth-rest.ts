import { OryFlow } from "../auth.types";
import { request as __request } from "../generated/service-product/core/request";
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

export const fetchLoginFlowRest = async (): Promise<OryFlow> => {
  const result = await __request({
    method: "GET",
    path: `/self-service/login/browser`,
    errors: {
      401: `Unauthorized`,
      403: `Forbidden`,
      404: `Not Found`,
    },
  });
  return result.body;
};

export const useGetLoginFlowRestMutation = (
    options?: UseQueryOptions<OryFlow>
) => {
  return useMutation({
    // queryKey: ["get-registration-flow-rest"],
    mutationFn: () => fetchLoginFlowRest(),
    ...options,
  });
};