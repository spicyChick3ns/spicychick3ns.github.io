import { lime, pink } from "@mui/material/colors";
import "./App.css";
import {
  Typography,
  Stack,
  createTheme,
  ThemeProvider,
  IconButton,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const theme = createTheme({
  palette: {
    primary: lime,
    secondary: pink,
  },
  typography: {
    fontFamily: "Inconsolata, monospace",
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        className="App"
        sx={{ p: 2 }}
      >
        <Typography variant="h3">melissa gonzales</Typography>
        <IconButton color="primary">
          <LinkedInIcon />
        </IconButton>
        <Typography variant="body1">
          {`I'm a software engineer at Q4 who studied computer science at McMaster
          University and graduated in November 2020.`}
        </Typography>
        <br />
        <Typography variant="body1">
          {`In addition to being a software engineer, I am a textile artist. I
          sew and knit clothes; my goal is to only sew new additions for my wardrobe. I particularly enjoy using old textiles to make patchwork and colour blocked clothing. 
          I am also a keyboardist, and singer; I am a solo artist, session musician, and play in a band called UltraViolet Catastrophe. We are an indie pop band based in Toronto, and have played shows across the Greater Toronto Area. 
          `}
        </Typography>
        <br />

        <Typography variant="body1">
          {`Currently I work at Q4 where I contribute to a platform for investor relations. Previously, I've work at Konrad Group, where I have contributed to a variety of projects, internal tooling, and tech talks. I worked at Hockeystick, where I developed software to display venture capital data. I have also worked at Mappedin where I built software to wayfind through indoor spaces`}
        </Typography>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
