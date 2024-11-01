import { Stack, Typography } from "@mui/material";
import Link from "../components/link";
const About = () => {
  return (
    <Stack gap={2}>
      <Stack>
        <Typography variant="h3"> About Melissa</Typography>
        <Typography variant="subtitle1"> Last edited Oct 30, 2024</Typography>
      </Stack>

      <Typography variant="body1">
        I began coding in 2008ish, creating a Piczo "blog" that played music when you landed on the page. The cursor
        would change colors and emit a trail of sparkles as it moved. I considered it tasteful for the time.
        <br />
        <br />
        I'm interested in full-stack web development projects, with a focus on testing and accessibility. Previously, I
        spent time building things at <Link url="http://www.q4inc.com" text="Q4 Inc" />,{" "}
        <Link url="https://www.konrad.com/" text="Konrad Group" />,{" "}
        <Link url="https://www.linkedin.com/company/hockeystickco" text="Hockeystick Co" />, and{" "}
        <Link url="https://www.mappedin.com/" text="Mappedin" />
        .
        <br />
        <br />
        In my free time play the keys for a few bands, and make music. I like baking, basketball, combat sports, and I
        sew most of my clothes.
        <br />
        <br />
        Open to chats and coffee in the GTA. Say <Link text="hi!" url="mailto:gonzalesmsd@gmail.com" />
      </Typography>
    </Stack>
  );
};

export default About;
