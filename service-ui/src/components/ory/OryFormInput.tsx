import React from "react";
import { Node } from "../../auth.types";
import { Button, TextField } from "@mui/material";

interface OryFormInputProps {
  node: Node;
}

const OryFormInput: React.FunctionComponent<OryFormInputProps> = ({ node }) => {
  if (node.attributes.type === "hidden") {
    return (
      <input
        name={node.attributes.name}
        type={node.attributes.type}
        value={node.attributes.value ?? ""}
      />
    );
  }
  if (node.attributes.type === "submit") {
    // TODO fix it
    return (
      <input
        name={node.attributes.name}
        type={node.attributes.type}
        value={node.attributes.value ?? ""}
      />
    );
    // return (
    //   <Button
    //     fullWidth
    //     variant="contained"
    //     color="primary"
    //     name={node.attributes.name}
    //     type={node.attributes.type}
    //     value={node.attributes.value ?? ""}
    //   >
    //     Submit
    //   </Button>
    // );
  }
  return (
    <TextField
      name={node.attributes.name}
      type={node.attributes.type}
      defaultValue={node.attributes.value ?? ""}
      required={node.attributes.required ?? false}
      disabled={node.attributes.disabled ?? false}
      fullWidth
      variant="outlined"
      label={node.meta.label?.text ?? ""}
    />
  );
};

export default OryFormInput;
