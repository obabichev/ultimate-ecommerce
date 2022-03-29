import React, { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";

export interface ImageInputProps {
  name?: string;
  onAdd: (link: string) => void;
}

export const ImageInput: React.FunctionComponent<ImageInputProps> = ({
  onAdd,
  name,
}) => {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    onAdd(value);
    setValue("");
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={9}>
        <TextField
          fullWidth
          label={name ?? "Link"}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Grid>
      <Grid item xs={3}>
        <Button fullWidth variant="contained" onClick={handleSubmit}>
          Add
        </Button>
      </Grid>
    </Grid>
  );
};
