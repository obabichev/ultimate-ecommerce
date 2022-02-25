import React, { useMemo } from "react";
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
  const [tagParam] = useQueryParam("tag", StringParam);
  const productsQuery = useSearchQuery(searchParam ?? "", tagParam ?? "", {
    enabled: !!searchParam || !!tagParam,
  });

  const products = useMemo(
    () =>
      productsQuery.data?.filter(
        (product) => !tagParam || product.tag === tagParam
      ) ?? [],
    [tagParam, productsQuery.data]
  );

  const tagsQuery = useGetTags();

  const history = useHistory();

  const handleClickProduct = (id: string) => history.push(`/product/${id}`);

  return (
    <PageWrapper loading={isQueriesLoading(productsQuery, tagsQuery)}>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        {tagsQuery.data && (
          <Box sx={{ width: 240 }}>
            <TagsView tags={tagsQuery.data} />
          </Box>
        )}
        <Box sx={{ flex: 1 }}>
          <ProductsList
            onProductClick={handleClickProduct}
            products={products}
          />
        </Box>
      </Box>
    </PageWrapper>
  );
};

export default HomePage;
