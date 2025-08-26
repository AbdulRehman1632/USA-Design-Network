import React from "react";
import { Box, Typography, Button } from "@mui/material";

const NewsLetterType = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" }, // mobile me column, desktop me row
        textAlign: { xs: "center", md: "left" },
        gap: { xs: 3, md: 0 }, // mobile me spacing
        p: { xs: 4, md: 8 },
        color: "#fff",
        borderRadius: 3,
        backgroundColor: "#222222",
      }}
    >
      {/* Left Side Heading */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          mb: { xs: 2, md: 0 }, // mobile pe neeche margin
        }}
      >
        Feel Free to Contact with us.
      </Typography>

      {/* Right Side Button */}
      <Button
        variant="contained"
        sx={{
          bgcolor: "primary.main",
          px: { xs: 3, md: 4 },
          py: { xs: 1, md: 1.2 },
          fontSize: { xs: "0.9rem", md: "1rem" },
          fontWeight: "bold",
          borderRadius: "30px",
        }}
      >
        Contact US
      </Button>
    </Box>
  );
};

export default NewsLetterType;
