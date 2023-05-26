import { LoadingButton } from "@mui/lab";
import { Box, FormControl, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import api from "../api";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { Header } from "../components/Header";
import { useUser } from "../hooks";

const passwordSchema = Yup.object().shape({
  oldPassword: Yup.string()
    .required("Digite sua senha")
    .min(6, "A senha deve ter no mínimo 6 caracteres"),
  newPassword: Yup.string()
    .required("Digite sua senha")
    .min(6, "A senha deve ter no mínimo 6 caracteres"),
});

export function PasswordChange() {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const { user } = useUser();

  const [loading, setLoading] = useState(false);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  async function onSubmit(values) {
    setLoading(true);
    return api
      .post("/user/changepassword", {
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
      })
      .then(() => {
        enqueueSnackbar("Senha alterada com sucesso", { variant: "success" });
        navigate("/dashboard");
      })
      .catch((error) => {
        return enqueueSnackbar(error, { variant: "error" });
      })
      .finally(() => setLoading(false));
  }

  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
    },
    validationSchema: passwordSchema,
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
            <Typography variant="h5">Altere sua senha</Typography>
            <TextField
              id="oldPassword"
              name="oldPassword"
              label="Senha"
              type="password"
              variant="outlined"
              size="small"
              value={formik.values.oldPassword}
              onChange={formik.handleChange}
              error={
                formik.touched.oldPassword && Boolean(formik.errors.oldPassword)
              }
              helperText={
                formik.touched.oldPassword && formik.errors.oldPassword
              }
            />
            <TextField
              id="newPassword"
              name="newPassword"
              label="Nova senha"
              type="password"
              variant="outlined"
              size="small"
              value={formik.values.newPassword}
              onChange={formik.handleChange}
              error={
                formik.touched.newPassword && Boolean(formik.errors.newPassword)
              }
              helperText={
                formik.touched.newPassword && formik.errors.newPassword
              }
            />
            <LoadingButton variant="contained" type="submit" loading={loading}>
              Salvar
            </LoadingButton>
          </FormControl>
        </Card>
      </Container>
    </Box>
  );
}
