import React, { useState } from "react";
import { BuyProductRequestDTO, Product, User } from "../../generated";
import { Box, Button, TextField } from "@mui/material";

interface BuyFormProps {
  product: Product;
  user: User;
  onBuy: (body: BuyProductRequestDTO) => void;
  disabled?: boolean;
}

const BuyForm: React.FunctionComponent<BuyFormProps> = ({
  product,
  user,
  onBuy,
  disabled,
}) => {
  const [amount, setAmount] = useState("1");

  const parsedAmount = Number.parseInt(amount);
  const isInputValid = parsedAmount && parsedAmount > 0;

  return (
    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <Box p={1}>
        <TextField
          size="small"
          value={amount}
          placeholder="Amount"
          onChange={(e) => setAmount(e.target.value)}
        />
      </Box>
      <Box p={1}>
        <Button
          variant="contained"
          disabled={!isInputValid || disabled}
          onClick={() =>
            onBuy({
              amount: parsedAmount,
              userId: user.id,
              productId: product.id,
            })
          }
        >
          Buy
        </Button>
      </Box>
    </Box>
  );
};

export default BuyForm;
