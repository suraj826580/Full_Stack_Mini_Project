import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
export default function GrayNav() {
  return (
    <Box
      bgcolor={"#f7f6f2"}
      display={"flex"}
      justifyContent={"end"}
      py={1}
      px={5}>
      <Typography fontSize={"16px"} color="#78909C" fontWeight={400}>
        <IconButton style={{ color: "#c03e64" }} disableRipple>
          <PersonIcon />
        </IconButton>
        Sign in / Sign Up
      </Typography>
    </Box>
  );
}
