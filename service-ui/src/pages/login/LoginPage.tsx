import React from "react";
import PageWrapper from "../../components/PageWrapper";
import { StringParam, useQueryParam } from "use-query-params";
import { useGetLoginFlow } from "../../service/auth";
import OryForm from "../../components/ory/OryForm";
import { Button } from "@mui/material";
import ThinMiddleBox from "../../components/ThinMiddleBox";

interface LoginPageProps {}

const LoginPage: React.FunctionComponent<LoginPageProps> = () => {
  const [flow] = useQueryParam("flow", StringParam);
  console.log("[obabichev]", { flow });

  const flowQuery = useGetLoginFlow(flow ?? "", { enabled: !!flow });
  console.log("[obabichev]", { data: flowQuery.data });

  return (
    <PageWrapper loading={flowQuery.isLoading}>
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
