import React, { useEffect } from "react";
import { useGetRegistrationFlow } from "../../service/auth";
import { StringParam, useQueryParam } from "use-query-params";
import OryForm from "../../components/ory/OryForm";
import PageWrapper from "../../components/PageWrapper";
import ThinMiddleBox from "../../components/ThinMiddleBox";
import { useGetRegistrationFlowRestMutation } from "../../service/auth-rest";

interface RegistrationPageProps {}

const RegistrationPage: React.FunctionComponent<RegistrationPageProps> =
  ({}) => {
    // const [flow] = useQueryParam("flow", StringParam);
    // const flowQuery = useGetRegistrationFlow(flow ?? "", { enabled: !!flow });
    //
    // console.log("[obabichev]", { data: flowQuery.data });

    const query = useGetRegistrationFlowRestMutation();

    useEffect(() => {
      console.log("[obabichev]", { mutation: true });
      query.mutate();
    }, []);

    console.log("[obabichev]", { data: query.data });

    return (
      <PageWrapper>
        <ThinMiddleBox>
          {query.data && <OryForm flow={query.data} />}
        </ThinMiddleBox>
      </PageWrapper>
    );
  };

export default RegistrationPage;
