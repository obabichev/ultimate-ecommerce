import React from "react";
import { Product } from "../../generated/service-product";
import { Grid, Typography, Rating } from "@mui/material";
import { formatPrice, formatProductLanguage } from "../../utils/format";
import { countProductRating } from "../../utils/product";
import { Link } from "react-router-dom";

interface ProductListItemProps {
  product: Product;
  onProductClick: (id: string) => void;
}

const ProductListItem: React.FunctionComponent<ProductListItemProps> = ({
  product,
}) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        {product.images.length && (
          <img width="100%" alt="product logo" src={product.images[0]} />
        )}
      </Grid>
      <Grid item xs={8}>
        <Link to={`/product/${product.usin}`}>
          <Typography variant="subtitle1">{product.title}</Typography>
        </Link>

        <Typography variant="subtitle2">
          {formatProductLanguage(product)}
        </Typography>
        <Rating
          name="read-only"
          value={countProductRating(product)}
          precision={0.2}
          readOnly
        />
        {product.sellOptions.map((sellOption, index) => (
          <div key={index}>
            <Typography variant="body1">{sellOption.type}</Typography>
            <Typography variant="subtitle1">
              {formatPrice(sellOption.price)} {sellOption.currency}
            </Typography>
          </div>
        ))}
      </Grid>
    </Grid>
  );
};

export default ProductListItem;
