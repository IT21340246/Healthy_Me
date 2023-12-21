import { Box, Typography, ThemeProvider, IconButton } from "@mui/material";
import { palette } from "@mui/system";

export const Footer = () => {
  return (
    <>
      <ThemeProvider
        theme={{
          palette: {
            primary: {
              main: "#00FFF",
              dark: "#003165",
            },
          },
        }}
      >
        <Box
          width={'100%'}
          height={300}
          my={4}
          display={"flex"}
          alignItems={"center"}
          gap={4}
          component={"section"}
          sx={{ bgcolor: "primary.dark" }}
        >
        
        </Box>
      </ThemeProvider>
    </>
  );
};
