import { createTheme, CssBaseline, Stack, ThemeProvider } from "@mui/material";
import Header from "../components/header";
import { useMemo, useState } from "react";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "../context/themeContext";
import { pink } from "@mui/material/colors";
import Footer from "../components/footer";

interface RootProps {
  outlet?: any;
}

function Root(props: RootProps) {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const isLightMode = useMemo(() => mode === "light", [mode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode: mode,
        primary: {
          main: "#7CB342",
          dark: "#33691E",
          contrastText: "#212121",
        },
        secondary: pink,
        background: {
          default: isLightMode ? "#fafafa" : "#121212",
        },
      },
      shape: {
        borderRadius: 12,
      },
      typography: {
        fontFamily: "Inconsolata, monospace",
      },
    });
  }, [isLightMode, mode]);

  return (
    <ThemeContext.Provider value={mode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Stack
          sx={{
            p: 3,
            height: "100vh",
            "* > ::selection": {
              background: isLightMode ? "#FDD835" : "rgba(253, 216, 53, 0.14)",
            },
          }}
          gap={2}
          justifyContent="space-between"
        >
          <Stack direction="column">
            <Header darkMode={mode === "dark"} handleDarkModeChange={colorMode.toggleColorMode} />
            {props.outlet ? props.outlet : <Outlet />}
          </Stack>
          <Footer />
        </Stack>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default Root;
