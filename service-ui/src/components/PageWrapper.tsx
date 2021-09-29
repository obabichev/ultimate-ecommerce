import React from "react";
import { Box, Container, LinearProgress } from "@mui/material";
import ApplicationBar from "../app/bar/ApplicationBar";

interface PageWrapperProps {
  loading?: boolean;
}

const PageWrapper: React.FunctionComponent<PageWrapperProps> = ({
  children,
  loading,
}) => {
  return (
    <Container>
      <ApplicationBar />
      {loading && <LinearProgress />}
      <Box m={2}>{children}</Box>
    </Container>
  );
};

export default PageWrapper;
