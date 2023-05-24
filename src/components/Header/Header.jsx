import { Box, Button, Typography } from "@mui/material";
import * as S from "./styles";

export function Header() {
  return (
    <S.Header>
      <Typography color="white" variant="h5">
        Login Plus
      </Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        <a href="/">
          <Button color="secondary" variant="contained">
            Login
          </Button>
        </a>
        <a href="/registro">
          <Button color="secondary" variant="outlined">
            Registro
          </Button>
        </a>
      </Box>
    </S.Header>
  );
}
