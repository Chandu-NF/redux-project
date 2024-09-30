import { Box, Stack, Typography } from "@mui/joy";
import { Outlet } from "react-router-dom";
import DropDownMenu from './DropDwon.tsx';
import NavComp from './NavComp.tsx';
import { layoutBox, layoutImage, layoutStack, layoutStackBox } from "./Styles";

function Layout() {
  return (
    <>
      <Box sx={layoutBox}>
        <Stack
          sx={layoutStack}
          direction="row"
          gap={15}
        >
          <Box
            sx={layoutStackBox}
          >
            <img
              src="./youtube (1).png"
              alt="YouTube logo"
              style={ layoutImage }
            />
            <Typography
              textColor="white"
              sx={{ cursor: "pointer", fontSize: '20px' }}
            >
              YouTube
            </Typography>
          </Box>

          <NavComp/>

        </Stack>

        <Stack sx={{ display: { xs: "flex", sm: "none" } }}>
          <DropDownMenu />
        </Stack>
      </Box>

      <Box>
        <Outlet />
      </Box>
    </>
  );
}


export default Layout;
