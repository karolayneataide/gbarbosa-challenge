import {
  Alert,
  Box,
  Divider,
  FormControl,
  Link,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "../components/Container";

import { LoadingButton } from "@mui/lab";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { useUser } from "../hooks";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("O email é requerido"),
  password: Yup.string()
    .min(6, "A senha deve ter no mínimo 6 caracteres")
    .required("Digite sua senha"),
});

export function Login() {
  const navigate = useNavigate();
  const { user, login } = useUser();

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onSubmit(values) {
    setLoading(true);
    return login(values)
      .then(() => navigate("/dashboard"))
      .finally(() => setLoading(false));
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <Box>
      <Snackbar
        open={Boolean(error)}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        onClose={() => setError(false)}
      >
        <Alert severity="error">{error}</Alert>
      </Snackbar>
      <Header user={user} />
      <Container>
        <Card>
          <FormControl
            onSubmit={formik.handleSubmit}
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              width: 600,
              gap: 2,
            }}
          >
            <Typography variant="h6">Acesse sua conta</Typography>
            <TextField
              id="email"
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              size="small"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              id="password"
              name="password"
              label="Senha"
              type="password"
              variant="outlined"
              size="small"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <LoadingButton variant="contained" type="submit" loading={loading}>
              Entrar
            </LoadingButton>
          </FormControl>
          <Divider />
          <Typography>
            Não tem uma conta?{" "}
            <Link href="/registro" underline="none">
              Cadastre-se
            </Link>
          </Typography>
        </Card>
      </Container>
    </Box>
  );
}
