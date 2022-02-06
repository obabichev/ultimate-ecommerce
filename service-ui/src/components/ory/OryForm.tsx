import React from "react";
import { OryFlow } from "../../auth.types";
import { Grid } from "@mui/material";
import OryFormInput from "./OryFormInput";

interface RegistrationFormProps {
  flow: OryFlow;
}

const OryForm: React.FunctionComponent<RegistrationFormProps> = ({ flow }) => {
  return (
    <form method={flow.ui.method} action={flow.ui.action}>
      <Grid container spacing={2}>
        {flow.ui.nodes.map((node) => (
          <Grid item xs={12}>
            <OryFormInput node={node} />
          </Grid>
        ))}
      </Grid>
    </form>
  );
};

export default OryForm;
