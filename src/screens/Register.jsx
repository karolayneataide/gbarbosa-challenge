import { LoadingButton } from "@mui/lab";
import {
  Box,
  Divider,
  FormControl,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import * as Yup from "yup";
import api from "../api";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { Header } from "../components/Header";
import { useUser } from "../hooks";

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("O nome é requerido"),
  email: Yup.string().required("O email é requerido"),
  password: Yup.string()
    .required("A senha é requerida")
    .min(6, "A senha deve ter no mínimo 6 caracteres"),
});

export function Register() {
  const { enqueueSnackbar } = useSnackbar();
  const { user, login } = useUser();

  const [loading, setLoading] = useState(false);

  async function onSubmit(values) {
    setLoading(true);
    return api
      .post("/user/register", {
        name: values.name,
        email: values.email,
        password: values.password,
      })
      .then(() => {
        enqueueSnackbar("Usuário registrado com sucesso!", {
          variant: "success",
        });
        return login(values);
      })
      .catch((error) => enqueueSnackbar(error, { variant: "error" }))
      .finally(() => setLoading(false));
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: RegisterSchema,
    onSubmit,
  });

  return (
    <Box>
      <Header user={user} />
      <Container>
        <Card>
          <FormControl
            component="form"
            onSubmit={formik.handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              width: 600,
              gap: 2,
            }}
          >
            <Typography variant="h6">Crie sua conta</Typography>
            <TextField
              id="name"
              name="name"
              label="Nome"
              variant="outlined"
              size="small"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
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
              Cadastro
            </LoadingButton>
          </FormControl>
          <Divider />
          <Typography>
            Já tem uma conta?{" "}
            <Link href="/" underline="none">
              Entrar
            </Link>
          </Typography>
        </Card>
      </Container>
    </Box>
  );
}
