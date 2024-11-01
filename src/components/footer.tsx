import { Stack } from "@mui/material";
import Link from "./link";

const Footer = () => {
  return (
    <Stack direction="row" gap={2}>
      <Link text="Github" url="https://github.com/spicyChick3ns" />
      <Link text="Linkedin" url="https://www.linkedin.com/in/gonzalesmsd/" />
      <Link text="Contact" url="mailto:gonzalesmsd@gmail.com" />
    </Stack>
  );
};
export default Footer;
