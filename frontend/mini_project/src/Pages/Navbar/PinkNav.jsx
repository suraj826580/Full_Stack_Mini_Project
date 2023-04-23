import React from "react";
import { IconButton, Stack, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
export default function PinkNavbar() {
  return (
    <>
      <Stack
        direction={"row"}
        height={44}
        bgcolor={"#c03e64"}
        justifyContent={"center"}
        gap={50}>
        <IconButton>
          <ArrowBackIosNewIcon
            style={{
              color: "#fff",
            }}
          />
        </IconButton>
        <Stack
          direction={"row"}
          spacing={5}
          alignItems={"center"}
          color={"#fff"}>
          <Typography
            variant="subtitle2"
            fontSize={"small"}
            fontStyle={"italic"}>
            Seeing stars?
          </Typography>
          <Typography variant="subtitle2" fontSize={"small"}>
            Write 5+ reviews. Get 20% off!
          </Typography>
          <Typography variant="subtitle" fontSize={"small"}>
            view your order history
          </Typography>
          <Typography variant="subtitle" fontSize={"small"}>
            details
          </Typography>
        </Stack>
        <IconButton>
          <ArrowForwardIosIcon
            style={{
              color: "#fff",
            }}
          />
        </IconButton>
      </Stack>
    </>
  );
}
