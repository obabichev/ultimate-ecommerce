import { useHistory } from "react-router-dom";

const useOpenPage = () => {
  const history = useHistory();
  return (path: string) => history.push(path);
};

export const useOpenProductPage = () => {
  const openPage = useOpenPage();
  return (usin: string) => openPage(`/product/${usin}`);
};
