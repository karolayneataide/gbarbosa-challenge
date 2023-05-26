import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";

export function Header({ user }) {
  return (
    <AppBar>
      <Container>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Link href="/">
            <Typography color="white" variant="h5">
              Login Plus
            </Typography>
          </Link>
          {!user ? (
            <Box sx={{ display: "flex", gap: 2 }}>
              <a href="/">
                <Button sx={{ color: "white" }}>Login</Button>
              </a>
              <a href="/registro">
                <Button sx={{ color: "white" }}>Registro</Button>
              </a>
            </Box>
          ) : (
            <Link href="/dashboard" underline="none">
              <Avatar>{user.name[0]}</Avatar>
            </Link>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
