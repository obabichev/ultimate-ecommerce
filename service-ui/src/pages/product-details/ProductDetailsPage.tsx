import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../../service/search";
import PageWrapper from "../../components/PageWrapper";
import ProductDetails from "./ProductDetails";

interface ProductDetailsPageProps {}

const ProductDetailsPage: React.FunctionComponent<ProductDetailsPageProps> =
  () => {
    const { usin } = useParams<{ usin: string }>();
    const { data: product, isLoading } = useGetProductQuery(usin ?? "", {
      enabled: !!usin,
    });

    return (
      <PageWrapper loading={isLoading}>
        {product && <ProductDetails product={product} />}
      </PageWrapper>
    );
  };

export default ProductDetailsPage;
