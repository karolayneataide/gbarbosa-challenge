import { Box, Typography } from "@mui/material";
import React from "react";
import error404 from "../../src/assets/error404.svg";
import { Header } from "../components/Header";

export function NotFound() {
  return (
    <Box>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 20,
          gap: 2,
        }}
      >
        <img
          src={error404}
          alt="Página não encontrada"
          minWidth="400"
          height="400"
        />
        <Typography variant="h5">
          Ocorreu um erro ao carregar a página
        </Typography>
      </Box>
    </Box>
  );
}
