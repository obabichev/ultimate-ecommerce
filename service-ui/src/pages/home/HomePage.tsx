import React from "react";
import PageWrapper from "../../components/PageWrapper";
import { useGetProducts } from "../../service/product";
import ProductsList from "./ProductsList";
import { useHistory } from "react-router-dom";

interface HomePageProps {}

const HomePage: React.FunctionComponent<HomePageProps> = () => {
  const { data: products, isLoading } = useGetProducts();

  const history = useHistory();

  const handleClickProduct = (id: string) => history.push(`/product/${id}`);

  return (
    <PageWrapper loading={isLoading}>
      <ProductsList
        onProductClick={handleClickProduct}
        products={products ?? []}
      />
    </PageWrapper>
  );
};

export default HomePage;
