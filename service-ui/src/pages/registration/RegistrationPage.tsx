import React from "react";
import { useGetRegistrationFlow } from "../../service/auth";
import { StringParam, useQueryParam } from "use-query-params";
import OryForm from "../../components/ory/OryForm";
import PageWrapper from "../../components/PageWrapper";
import ThinMiddleBox from "../../components/ThinMiddleBox";

interface RegistrationPageProps {}

const RegistrationPage: React.FunctionComponent<RegistrationPageProps> =
  ({}) => {
    const [flow] = useQueryParam("flow", StringParam);
    const flowQuery = useGetRegistrationFlow(flow ?? "", { enabled: !!flow });

    console.log("[obabichev]", { data: flowQuery.data });

    return (
      <PageWrapper>
        <ThinMiddleBox>
          {flowQuery.data && <OryForm flow={flowQuery.data} />}
        </ThinMiddleBox>
      </PageWrapper>
    );
  };

export default RegistrationPage;
