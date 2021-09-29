import React from "react";
import PageWrapper from "../../components/PageWrapper";
import ProductsList from "./ProductsList";
import { useHistory } from "react-router-dom";
import { useSearchQuery } from "../../service/search";
import { StringParam, useQueryParam } from "use-query-params";

interface HomePageProps {}

const HomePage: React.FunctionComponent<HomePageProps> = () => {
  const [searchParam] = useQueryParam("search", StringParam);
  const { data: products, isLoading } = useSearchQuery(searchParam ?? "", {
    enabled: !!searchParam,
  });

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
