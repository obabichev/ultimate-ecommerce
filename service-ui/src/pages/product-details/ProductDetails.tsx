import React from "react";
import { Product } from "../../generated";
import { Grid, Typography } from "@mui/material";

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FunctionComponent<ProductDetailsProps> = ({
  product,
}) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5">{product.title}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Price: {product.price} {product.currency}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>In stock: {product.amount}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>Seller: {product.store.name}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">Technical details:</Typography>
        {Object.entries(product.technicalDetails).map(([key, value]) => (
          <Typography key={key}>
            {key}: {value}
          </Typography>
        ))}
      </Grid>
    </Grid>
  );
};

export default ProductDetails;
