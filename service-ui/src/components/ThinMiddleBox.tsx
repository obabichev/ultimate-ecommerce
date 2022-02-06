import React from "react";
import { Box } from "@mui/material";

interface ThinMiddleBoxProps {}

const ThinMiddleBox: React.FunctionComponent<ThinMiddleBoxProps> = ({
  children,
}) => {
  return (
    <Box sx={{ width: 350, margin: "0 auto", border: "1px #ddd solid" }} p={3}>
      {children}
    </Box>
  );
};

export default ThinMiddleBox;
