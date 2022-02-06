import React from "react";
import { useGetLoginFlow, useGetRegistrationFlow } from "../../service/auth";
import { StringParam, useQueryParam } from "use-query-params";
import RegistrationForm from "../../components/ory/RegistrationForm";

interface RegistrationPageProps {}

const RegistrationPage: React.FunctionComponent<RegistrationPageProps> =
  ({}) => {
    const [flow] = useQueryParam("flow", StringParam);
    const flowQuery = useGetRegistrationFlow(flow ?? "", { enabled: !!flow });

    console.log("[obabichev]", { data: flowQuery.data });

    return (
      <div>{flowQuery.data && <RegistrationForm flow={flowQuery.data} />}</div>
    );
  };

export default RegistrationPage;
