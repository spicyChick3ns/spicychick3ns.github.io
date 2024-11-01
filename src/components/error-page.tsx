import { Stack, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <Stack direction="column" sx={{ p: 2 }}>
      <Typography variant="h3"> Nothing to see here.</Typography>
      {/* <Typography>{error.message}</Typography> */}
    </Stack>
  );
};
export default ErrorPage;
