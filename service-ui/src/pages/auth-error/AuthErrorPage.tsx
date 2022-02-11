import React from "react";
import { StringParam, useQueryParam } from "use-query-params";
import { useGetAuthError } from "../../service/auth";

interface AuthErrorPageProps {}

const AuthErrorPage: React.FunctionComponent<AuthErrorPageProps> = ({}) => {
  const [id] = useQueryParam("id", StringParam);
  console.log("[obabichev]", { id });

  const query = useGetAuthError(id ?? "", { enabled: !!id });
  console.log("[obabichev]", { error: query.data });
  return <div>AuthErrorPage</div>;
};

export default AuthErrorPage;
