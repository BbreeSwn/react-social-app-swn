import { Box, Stack, Grid } from "@mui/material";
import AppBar from "../component/AppBar";
import SideBar from "../component/SideBar"
import Feed from "../component/Feed"
import RightBar from "../component/RightBar"

function HomePage() {
  return (
    <Box flexGrow={1}>
      <AppBar />

      <Grid
        container
        sx={{ textAlign: "centert", height: "calc(100vh - 64px)" }}
      >
        <Grid
          item
          md={3}
          sx={{ background: "wheat", display: { xs: "none", md: "block" } }}
        >
          <SideBar />
        </Grid>
        <Grid item xs={12} md={6}>
          <Feed />
        </Grid>
        <Grid
          item
          md={3}
          sx={{ background: "wheat", display: { xs: "none", md: "block" } }}
        >
          <RightBar />
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomePage;
