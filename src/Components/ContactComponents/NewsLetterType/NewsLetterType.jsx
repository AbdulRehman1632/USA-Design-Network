import React from "react";
import { Box, Typography, Button } from "@mui/material";

const NewsLetterType = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 10,
        // backgroundImage: "url('https://picsum.photos/1200/400')", // apni banner image ka link daalna
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        color: "#fff",
        borderRadius: 3,
        backgroundColor:"#222222"
      }}
    >
      {/* Left Side Heading */}
      <Typography variant="h3" sx={{ fontWeight: "bold" }}>
        Feel Free to Contact with us.
      </Typography>

      {/* Right Side Button */}
      <Button
        variant="contained"
        sx={{
          bgcolor: "primary.main",
          px: 4,
          py: 1.2,
          fontSize: "1rem",
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
