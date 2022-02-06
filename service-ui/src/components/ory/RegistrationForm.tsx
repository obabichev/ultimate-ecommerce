import React from "react";
import { RegistrationFlow } from "../../auth.types";

interface RegistrationFormProps {
  flow: RegistrationFlow;
}

const RegistrationForm: React.FunctionComponent<RegistrationFormProps> = ({
  flow,
}) => {
  return (
    <form method={flow.ui.method} action={flow.ui.action}>
      {flow.ui.nodes
        .filter((node) => node.attributes.type !== "submit")
        .map((node) => (
          <div>
            <label>{node.meta.label?.text}</label>
            <input
              name={node.attributes.name}
              type={node.attributes.type}
              defaultValue={node.attributes.value ?? ""}
              required={node.attributes.required ?? false}
              disabled={node.attributes.disabled ?? false}
            />
          </div>
        ))}
      {flow.ui.nodes
        .filter((node) => node.attributes.type === "submit")
        .map((node) => (
          <input
            name={node.attributes.name}
            type={node.attributes.type}
            value={node.attributes.value ?? ""}
          />
        ))}
    </form>
  );
};

export default RegistrationForm;
