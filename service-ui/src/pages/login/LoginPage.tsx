import React, { useEffect } from "react";
import PageWrapper from "../../components/PageWrapper";
import { StringParam, useQueryParam } from "use-query-params";
import { useGetLoginFlow } from "../../service/auth";
import OryForm from "../../components/ory/OryForm";
import { Button } from "@mui/material";
import ThinMiddleBox from "../../components/ThinMiddleBox";
import { useGetLoginFlowRestMutation } from "../../service/auth-rest";

interface LoginPageProps {}

const LoginPage: React.FunctionComponent<LoginPageProps> = () => {
  // const [flow] = useQueryParam("flow", StringParam);
  // console.log("[obabichev]", { flow });
  //
  // const flowQuery = useGetLoginFlow(flow ?? "", { enabled: !!flow });
  // console.log("[obabichev]", { data: flowQuery.data });

  const mutation = useGetLoginFlowRestMutation();

  useEffect(() => {
    console.log("[obabichev]", { mutation: true });
    mutation.mutate();
  }, []);

  return (
    <PageWrapper loading={mutation.isLoading}>
      <ThinMiddleBox>
        {mutation.data && <OryForm flow={mutation.data} />}

        <Button color="primary" href="/registration">
          Register
        </Button>
      </ThinMiddleBox>
    </PageWrapper>
  );
};

export default LoginPage;
