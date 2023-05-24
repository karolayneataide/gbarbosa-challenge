import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { Header } from "../components/Header/Header";

export function Login() {
  return (
    <Box>
      <Header />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <Box
          component="form"
          sx={{
            display: "grid",
            gap: 2,
            width: 300,
          }}
        >
          <TextField id="login" label="Login" type="email" variant="outlined" />
          <TextField
            id="password"
            label="Senha"
            type="password"
            variant="outlined"
          />
          <Button variant="contained">Entrar</Button>
        </Box>
      </Box>
    </Box>
  );
}
