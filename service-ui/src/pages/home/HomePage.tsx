import React from "react";
import PageWrapper from "../../components/PageWrapper";
import ProductsList from "./ProductsList";
import { useHistory } from "react-router-dom";
import { useGetTags, useSearchQuery } from "../../service/search";
import { StringParam, useQueryParam } from "use-query-params";
import { Box } from "@mui/material";
import { isQueriesLoading } from "../../utils/query";
import TagsView from "../../components/tags/TagsView";

interface HomePageProps {}

const HomePage: React.FunctionComponent<HomePageProps> = () => {
  const [searchParam] = useQueryParam("search", StringParam);
  const productsQuery = useSearchQuery(searchParam ?? "", {
    enabled: !!searchParam,
  });
  const tagsQuery = useGetTags();

  const history = useHistory();

  const handleClickProduct = (id: string) => history.push(`/product/${id}`);

  return (
    <PageWrapper loading={isQueriesLoading(productsQuery, tagsQuery)}>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        {tagsQuery.data && <TagsView tags={tagsQuery.data} />}
        <ProductsList
          onProductClick={handleClickProduct}
          products={productsQuery.data ?? []}
        />
      </Box>
    </PageWrapper>
  );
};

export default HomePage;
