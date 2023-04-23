import { Box, Divider, IconButton, Stack, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallIcon from "@mui/icons-material/LocalMall";
export default function SearchBar() {
  return (
    <>
      <Stack
        px={10}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}>
        <Box>
          <Stack direction={"row"}>
            <Box
              padding={2}
              border={"1px solid #CFD8DC"}
              borderTop={"4px solid  #167b93"}>
              <img
                width={"100%"}
                src="https://images.ctfassets.net/5de70he6op10/53ZOE4rRqrxcvv0hg2eSLV/a849085e5f600c618132be2475017746/anthro-logo.svg"
                alt=""
              />
            </Box>
            <Box
              padding={2}
              border={"1px solid #CFD8DC"}
              borderTop={"none"}
              sx={{
                "&:hover": { backgroundColor: "#ECEFF1" },
              }}>
              <img
                width={"100%"}
                src="https://images.ctfassets.net/5de70he6op10/y1O9tEDOvCGliGUvT9RoJ/eb8ab4734c5e3778b8b61da70ed441ac/AL_NewLogo_2.svg"
                alt=""
              />
            </Box>
          </Stack>
        </Box>
        <Stack direction={"row"} gap={3} alignItems={"center"}>
          <TextField
            variant="outlined"
            placeholder="Search Anthropologie"
            InputProps={{
              endAdornment: <SearchIcon />,
              style: {
                color: "#32b0d6",
                fontSize: "12px",
                fontWeight: "semibold",
              },
            }}
            size="small"
          />
          <IconButton>
            <LocalMallIcon
              style={{
                color: "#32b0d6",
              }}
            />
          </IconButton>
        </Stack>
      </Stack>
      <Divider style={{ width: "100%" }} />
    </>
  );
}
