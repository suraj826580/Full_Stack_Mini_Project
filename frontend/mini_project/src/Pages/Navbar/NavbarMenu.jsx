import { Box, Divider, Link, Stack, Typography } from "@mui/material";
import React from "react";

const array = [
  { title: "New!" },
  { title: "Top-Rated" },
  { title: "Dresses" },
  { title: "Clothing" },
  { title: "Shoes" },
  { title: "Accessories" },
  { title: "Weddings" },
  { title: "Home & Furniture" },
  { title: "Beauty & Wellness" },
  { title: "Gifts and Candles" },
  { title: "Sale" },
];

export default function NavbarMenu() {
  return (
    <Box boxSizing={"border-box"}>
      <Stack direction={"row"} gap={2} mx={10} py={1} boxSizing={"border-box"}>
        {array.map(({ title, link }) => {
          return (
            <Link
              py={1}
              px={1}
              h={"100%"}
              sx={{
                "&:hover": {
                  borderBottom: "1px solid #167b93",
                  color: "#167b93",
                  boxSizing: "border-box",
                },
              }}
              style={{ textDecoration: "none", color: "#4f4e52" }}
              href={"#"}>
              <Typography fontSize={"14px"}>{title}</Typography>
            </Link>
          );
        })}
      </Stack>
      <Divider width="100%" />
    </Box>
  );
}
