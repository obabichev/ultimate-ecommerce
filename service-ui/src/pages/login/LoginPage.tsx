import React from "react";
import PageWrapper from "../../components/PageWrapper";
import LoginForm from "./LoginForm";
import { useGetOrCreateUserMutation } from "../../service/user";
import { useAuthContext } from "../../app/AuthContext";
import { useHistory } from "react-router-dom";

interface LoginPageProps {}

const LoginPage: React.FunctionComponent<LoginPageProps> = () => {
  const { login } = useAuthContext();
  const history = useHistory();

  const navigateHomePage = () => history.push("/");

  const mutation = useGetOrCreateUserMutation({
    onSuccess: (user) => {
      login(user);
      navigateHomePage();
    },
  });

  return (
    <PageWrapper loading={mutation.isLoading}>
      <LoginForm onSubmit={mutation.mutate} />
    </PageWrapper>
  );
};

export default LoginPage;
