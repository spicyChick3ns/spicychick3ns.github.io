import { Link as MuiLink, useTheme } from "@mui/material";
interface LinkProps {
  text: string;
  url: string;
}
const Link = (props: LinkProps) => {
  const { url, text } = props;
  const theme = useTheme();
  return (
    <MuiLink
      color={theme.palette.secondary.main}
      target="_blank"
      rel="noopener noreferrer"
      href={url}
      aria-labelledby={text}
    >
      {text}
    </MuiLink>
  );
};

export default Link;
