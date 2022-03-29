import { request as __request } from "../generated/service-product/core/request";
import { useQuery, UseQueryOptions } from "react-query";
import { OryFlow } from "../auth.types";
import { Profile } from "../profile.types";

export const fetchLoginFlow = async (flow: string): Promise<OryFlow> => {
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
  options?: UseQueryOptions<OryFlow>
) => {
  return useQuery({
    queryKey: ["get-login-flow", flow],
    queryFn: () => fetchLoginFlow(flow),
    ...options,
  });
};

export const fetchRegistrationFlow = async (flow: string): Promise<OryFlow> => {
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
  options?: UseQueryOptions<OryFlow>
) => {
  return useQuery({
    queryKey: ["get-registration-flow", flow],
    queryFn: () => fetchRegistrationFlow(flow),
    ...options,
  });
};

export const fetchProfile = async (): Promise<Profile | null> => {
  try {
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
  } catch (error) {
    console.log("User profile was not loaded");
    return null;
  }
};

export const useGetProfile = (options?: UseQueryOptions<Profile | null>) => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: () => fetchProfile(),
    ...options,
  });
};

export const fetchAuthError = async (id: string): Promise<any> => {
  const result = await __request({
    method: "GET",
    path: `/self-service/errors`,
    query: {
      id,
    },
    errors: {
      401: `Unauthorized`,
      403: `Forbidden`,
      404: `Not Found`,
    },
  });
  return result.body;
};

export const useGetAuthError = (id: string, options?: UseQueryOptions<any>) => {
  return useQuery({
    queryKey: ["get-auth-error", id],
    queryFn: () => fetchAuthError(id),
    ...options,
  });
};
