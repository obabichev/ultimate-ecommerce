import React from "react";
import { Product } from "../../generated";
import { List, ListItemButton, ListItemText } from "@mui/material";

interface ProductsListProps {
  products: Product[];
  onProductClick: (id: string) => void;
}

const ProductsList: React.FunctionComponent<ProductsListProps> = ({
  products,
  onProductClick,
}) => {
  return (
    <List>
      {products.map((product) => (
        <ListItemButton
          key={product.usin}
          onClick={() => onProductClick(product.usin)}
        >
          <ListItemText primary={product.title} />
        </ListItemButton>
      ))}
    </List>
  );
};

export default ProductsList;
