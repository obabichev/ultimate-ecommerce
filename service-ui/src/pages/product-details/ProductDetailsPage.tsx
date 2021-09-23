import React from "react";
import PageWrapper from "../../components/PageWrapper";
import {
  getUseGetProductQueryKey,
  useBuyProductsMutation,
  useGetProduct,
} from "../../service/product";
import { useParams } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import { useAuthContext } from "../../app/AuthContext";
import BuyForm from "./BuyForm";
import { BuyProductRequestDTO } from "../../generated";
import { useQueryClient } from "react-query";
import { useSnackbar } from "notistack";

interface ProductDetailsPageProps {}

const ProductDetailsPage: React.FunctionComponent<ProductDetailsPageProps> =
  () => {
    const { id } = useParams<{ id: string }>();
    const { data: product, isLoading } = useGetProduct(id);
    const { user } = useAuthContext();
    const queryClient = useQueryClient();

    const { enqueueSnackbar } = useSnackbar();

    const buyProductMutation = useBuyProductsMutation({
      onSuccess: (purchase) => {
        enqueueSnackbar(
          `You successfully bought ${purchase.amount} product(s)`,
          {
            variant: "success",
          }
        );
        queryClient
          .invalidateQueries(getUseGetProductQueryKey(product?.id ?? ""))
          .catch(console.error);
      },
      onError: () => {
        enqueueSnackbar("Buying attempt is failed", {
          variant: "error",
        });
      },
    });

    const handleBuyProductsMutation = (body: BuyProductRequestDTO) => {
      buyProductMutation.mutate(body);
    };

    return (
      <PageWrapper loading={isLoading || buyProductMutation.isLoading}>
        {product && <ProductDetails product={product} />}
        {product && user && (
          <BuyForm
            user={user}
            product={product}
            disabled={buyProductMutation.isLoading}
            onBuy={handleBuyProductsMutation}
          />
        )}
      </PageWrapper>
    );
  };

export default ProductDetailsPage;
