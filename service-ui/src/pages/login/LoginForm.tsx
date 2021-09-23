import React, { FormEventHandler, MouseEventHandler, useState } from "react";
import { Box, Button, Grid, Paper, TextField } from "@mui/material";

interface LoginFormValue {
  username: string;
}

interface LoginFormProps {
  onSubmit: (form: LoginFormValue) => void;
}

const LoginForm: React.FunctionComponent<LoginFormProps> = ({ onSubmit }) => {
  const [form, setForm] = useState<LoginFormValue>({
    username: "",
  });

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit: FormEventHandler & MouseEventHandler = (event) => {
    if (event) {
      event.preventDefault();
    }
    onSubmit(form);
  };

  return (
    <Paper>
      <Box p={2}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                value={form.username}
                onChange={onChange}
                name="username"
                label="Username"
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ textAlign: "right" }}>
                <Button variant="contained" onClick={handleSubmit}>
                  Login
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Paper>
  );
};

export default LoginForm;
