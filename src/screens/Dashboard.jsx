import { Box, Link, Typography } from "@mui/material";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Container } from "../components/Container";
import { Header } from "../components/Header";
import { useUser } from "../hooks";

export function Dashboard() {
  const navigate = useNavigate();

  const { user, logout } = useUser();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <Box>
      <Header user={user} />
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            alignItems: "center",
          }}
        >
          <Typography variant="h5">Bem vindo {user.name}</Typography>
          <Link href="/alterar-senha" underline="none">
            Alterar senha
          </Link>
          <Link
            onClick={() => {
              logout();
              navigate("/");
            }}
            underline="none"
          >
            Sair
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
