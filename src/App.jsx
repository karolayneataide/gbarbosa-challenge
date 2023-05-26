import { CssBaseline } from "@mui/material";
import { Routes } from "./routes";
import { UserProvider } from "./providers";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <SnackbarProvider
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <CssBaseline />
      <UserProvider>
        <Routes />
      </UserProvider>
    </SnackbarProvider>
  );
}

export default App;
