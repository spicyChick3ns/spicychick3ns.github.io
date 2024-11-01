import { Button, IconButton, Stack } from "@mui/material";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

enum Pages {
  Home = "Home",
  Garden = "Garden",
  About = "About",
  Now = "Now",
}

interface HeaderProps {
  darkMode?: boolean;
  handleDarkModeChange: () => void;
}

const PAGES = [Pages.About, Pages.Now];

const Header = (props: HeaderProps) => {
  const { darkMode, handleDarkModeChange } = props;
  const navigate = useNavigate();
  const [active, setActive] = useState(Pages.Home);

  const handleNavButtonClick = (value: React.SyntheticEvent<HTMLButtonElement>) => {
    setActive(value.currentTarget.value as Pages);
    navigate(`/${value.currentTarget.value}`);
  };

  const handleThemeButtonClick = (value: React.SyntheticEvent<HTMLButtonElement>) => {
    handleDarkModeChange();
  };

  const handleLogoClick = () => {
    navigate("/");
  };
  return (
    <Stack direction="row" justifyContent="space-between" gap={1}>
      <img
        src="/images/logo.png"
        height="60px"
        width="60px"
        alt="logo"
        aria-labelledby="logo"
        style={{ pointerEvents: "all", cursor: "pointer" }}
        onClick={() => handleLogoClick()}
      />

      <Stack direction="row" justifyContent="end" gap={1}>
        {PAGES.map((page) => {
          const isActivePage = active === page;

          return (
            <Button
              key={page}
              color="primary"
              variant="text"
              onClick={handleNavButtonClick}
              value={page}
              aria-labelledby={page}
              sx={{ fontWeight: isActivePage ? 900 : 200 }}
            >
              {page}
            </Button>
          );
        })}
        <IconButton onClick={handleThemeButtonClick} aria-labelledby="theme">
          {darkMode ? <LightModeRoundedIcon color="primary" /> : <DarkModeRoundedIcon color="primary" />}
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Header;
