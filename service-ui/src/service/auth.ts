import { request as __request } from "../generated/core/request";
import { useQuery, UseQueryOptions } from "react-query";
import { RegistrationFlow } from "../auth.types";
import { Profile } from "../profile.types";

export const fetchLoginFlow = async (flow: string): Promise<any> => {
  const result = await __request({
    method: "GET",
    path: `/self-service/login/flows`,
    query: {
      id: flow,
    },
    errors: {
      401: `Unauthorized`,
      403: `Forbidden`,
      404: `Not Found`,
    },
  });
  return result.body;
};

export const useGetLoginFlow = (
  flow: string,
  options?: UseQueryOptions<any>
) => {
  return useQuery({
    queryKey: ["get-login-flow", flow],
    queryFn: () => fetchLoginFlow(flow),
    ...options,
  });
};

export const fetchRegistrationFlow = async (
  flow: string
): Promise<RegistrationFlow> => {
  const result = await __request({
    method: "GET",
    path: `/self-service/registration/flows`,
    query: {
      id: flow,
    },
    errors: {
      401: `Unauthorized`,
      403: `Forbidden`,
      404: `Not Found`,
    },
  });
  return result.body;
};

export const useGetRegistrationFlow = (
  flow: string,
  options?: UseQueryOptions<RegistrationFlow>
) => {
  return useQuery({
    queryKey: ["get-registration-flow", flow],
    queryFn: () => fetchRegistrationFlow(flow),
    ...options,
  });
};

export const fetchProfile = async (): Promise<Profile> => {
  const result = await __request({
    method: "GET",
    path: `/sessions/whoami`,
    errors: {
      401: `Unauthorized`,
      403: `Forbidden`,
      404: `Not Found`,
    },
  });
  return result.body;
};

export const useGetProfile = (options?: UseQueryOptions<Profile>) => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: () => fetchProfile(),
    ...options,
  });
};
