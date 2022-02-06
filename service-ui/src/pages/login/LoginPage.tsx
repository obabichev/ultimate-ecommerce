import React from "react";
import PageWrapper from "../../components/PageWrapper";
import LoginForm from "./LoginForm";
import { useGetOrCreateUserMutation } from "../../service/user";
import { useAuthContext } from "../../app/AuthContext";
import { useHistory, useParams } from "react-router-dom";
import { StringParam, useQueryParam } from "use-query-params";
import { useGetLoginFlow } from "../../service/auth";
import OryForm from "../../components/ory/OryForm";
import { Button } from "@mui/material";
import ThinMiddleBox from "../../components/ThinMiddleBox";

interface LoginPageProps {}

const LoginPage: React.FunctionComponent<LoginPageProps> = () => {
  // const { login } = useAuthContext();
  const history = useHistory();

  const [flow] = useQueryParam("flow", StringParam);
  console.log("[obabichev]", { flow });

  const flowQuery = useGetLoginFlow(flow ?? "", { enabled: !!flow });
  console.log("[obabichev]", { data: flowQuery.data });

  const navigateHomePage = () => history.push("/");

  const mutation = useGetOrCreateUserMutation({
    onSuccess: (user) => {
      // login(user);
      navigateHomePage();
    },
  });

  return (
    <PageWrapper loading={mutation.isLoading}>
      <ThinMiddleBox>
        {flowQuery.data && <OryForm flow={flowQuery.data} />}

        <Button
          color="primary"
          href="/.ory/kratos/public/self-service/registration/browser"
        >
          Register
        </Button>
      </ThinMiddleBox>
    </PageWrapper>
  );
};

export default LoginPage;
