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
    const mutation = useGetRegistrationFlowRestMutation();

    useEffect(() => {
      console.log("[obabichev]", { mutation: true });
      mutation.mutate();
    }, []);

    console.log("[obabichev]", { data: mutation.data });

    return (
      <PageWrapper>
        <ThinMiddleBox>
          {mutation.data && <OryForm flow={mutation.data} />}
        </ThinMiddleBox>
      </PageWrapper>
    );
  };

export default RegistrationPage;
