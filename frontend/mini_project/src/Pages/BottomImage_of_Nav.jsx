import React from "react";
import { Box } from "@mui/material";
export default function BottomImage_of_Nav({ src }) {
  return (
    <Box py={4}>
      <img width={"100%"} src={src} alt="" />
    </Box>
  );
}
