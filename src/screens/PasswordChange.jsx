import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { Header } from "../components/Header/Header";

export function PasswordChange() {
  return (
    <Box>
      <Header />
      <Box
        sx={{
          display: "flex",
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
          <TextField
            id="password"
            label="Senha antiga"
            type="password"
            variant="outlined"
          />
          <TextField
            id="new-password"
            label="Nova senha"
            type="password"
            variant="outlined"
          />

          <Button variant="contained">Salvar</Button>
        </Box>
      </Box>
    </Box>
  );
}
