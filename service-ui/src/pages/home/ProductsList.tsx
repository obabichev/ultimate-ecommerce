import React from "react";
import { Product } from "../../generated";
import { List, ListItemButton, ListItemText } from "@mui/material";
import ProductListItem from "./ProductListItem";

interface ProductsListProps {
  products: Product[];
  onProductClick: (id: string) => void;
}

const ProductsList: React.FunctionComponent<ProductsListProps> = ({
  products,
  onProductClick,
}) => {
  return (
    <div>
      {products.map((product) => (
        <ProductListItem
          key={product.usin}
          product={product}
          onProductClick={onProductClick}
        />
        // <ListItemButton
        //   key={product.usin}
        //   onClick={() => onProductClick(product.usin)}
        // >
        //   <ListItemText primary={product.title} />
        // </ListItemButton>
      ))}
    </div>
  );
};

export default ProductsList;
