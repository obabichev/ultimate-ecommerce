import React from "react";
import PageWrapper from "../../components/PageWrapper";
import LoginForm from "./LoginForm";
import { useGetOrCreateUserMutation } from "../../service/user";
import { useAuthContext } from "../../app/AuthContext";
import { useHistory, useParams } from "react-router-dom";
import { StringParam, useQueryParam } from "use-query-params";
import { useGetLoginFlow } from "../../service/auth";

interface LoginPageProps {}

const LoginPage: React.FunctionComponent<LoginPageProps> = () => {
  const { login } = useAuthContext();
  const history = useHistory();

  const [flow] = useQueryParam("flow", StringParam);
  console.log("[obabichev]", { flow });

  const flowQuery = useGetLoginFlow(flow ?? "", { enabled: !!flow });
  console.log("[obabichev]", { data: flowQuery.data });

  const navigateHomePage = () => history.push("/");

  const mutation = useGetOrCreateUserMutation({
    onSuccess: (user) => {
      login(user);
      navigateHomePage();
    },
  });

  return (
    <PageWrapper loading={mutation.isLoading}>
      <LoginForm onSubmit={mutation.mutate} />
    </PageWrapper>
  );
};

export default LoginPage;
