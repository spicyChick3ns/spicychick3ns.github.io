import { lime, pink } from "@mui/material/colors";
import "./App.css";
import { Typography, Stack, createTheme, ThemeProvider, IconButton, Link, CssBaseline } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Header from "./components/header";
import { useMemo, useState } from "react";

import { Outlet } from "react-router-dom";
import { ThemeContext } from "./context/themeContext";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#9db42b",
        dark: "#66751b",
        contrastText: "#212121",
      },
      secondary: pink,
      background: {
        default: "#fafafa",
      },
    },
    shape: {
      borderRadius: 12,
    },
    typography: {
      fontFamily: "Inconsolata, monospace",
    },
  });
  return (
    <ThemeContext.Provider value={mode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Stack sx={{ p: 2 }} gap={2}>
          <Header darkMode={mode === "dark"} handleDarkModeChange={colorMode.toggleColorMode} />
          <Outlet />
        </Stack>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
