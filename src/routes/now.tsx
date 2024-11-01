import { Paper, Stack, Typography } from "@mui/material";
import Link from "../components/link";

const Now = () => {
  return (
    <Stack gap={2} direction="column">
      <Stack>
        <Typography variant="h3">Now</Typography>
        <Typography variant="subtitle1">
          {" "}
          This page is based off the now page <Link text="concept" url="https://nownownow.com/about" /> by Derek Sivers{" "}
        </Typography>
      </Stack>
      <Paper sx={{ p: 2 }}>
        <Typography variant="subtitle1">Oct 31, 2024</Typography>
        <Typography variant="body1" component="span">
          I'm writing this on Halloween, waiting for trick or treaters to appear but only 3 people have showed up for
          the entire evening 😫. For however long I have been a dev, I have never had my own domain, so I'm going to
          give this a shot. This is my first entry on my Now page!
          <br />
          <br />
          Professionally: Looking for new opportunities!
          <br />
          <br />
          Personally:
          <ul>
            <li>🪡 I'm working on sewing a pair of pants right now. It's going to have a lot of pockets.</li>
            <li>🎹 I have 4 songs recorded for my EP!</li>
            <li>
              🎧 Currently listening to{" "}
              <Link
                url="https://open.spotify.com/album/0RjUPgDUNWBQbX9xzCdR3n?si=4tBKhk-WRGK4sFWb08-2Tg"
                text="Perfectionism by Jenna Reel"
              />
            </li>
          </ul>
        </Typography>
      </Paper>
    </Stack>
  );
};

export default Now;
