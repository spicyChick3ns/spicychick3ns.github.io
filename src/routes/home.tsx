import { Typography, Stack, Link } from "@mui/material";

const Home = () => {
  return (
    <Stack direction="column" justifyContent="center" alignItems="center" className="App" sx={{ p: 2 }}>
      <Typography variant="h4">
        <Link color="secondary" fontWeight="600" href="#/about">
          Melissa Gonzales
        </Link>{" "}
        is a software engineer who likes playing the keys, sewing, and working on the web. Currently living in the GTA.
      </Typography>
    </Stack>
  );
};

export default Home;
