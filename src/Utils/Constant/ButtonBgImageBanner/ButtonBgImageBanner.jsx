import React from "react";
import { Box, Typography, Button } from "@mui/material";

const ButtonBgImageBanner = ({ heading, buttonText }) => {
  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: 3,
        overflow: "hidden",
        p: { xs: 4, md: 8 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // 👈 mobile pe column
        justifyContent: "space-between",
        alignItems: { xs: "center", md: "center" }, // 👈 mobile pe text left
        gap: { xs: 2, md: 0 }, // 👈 thoda spacing text & button me
        color: "#fff",
        minHeight: "220px",
        backgroundImage: `url(https://res.cloudinary.com/dpm8fa6gn/image/upload/v1756207161/abstract-truth-concept-arrangement-1-1-scaled_xrild4.webp)`,
        backgroundSize: "cover",
        backgroundPosition: "top-center",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0,0,0,0.5)", 
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Box sx={{ position: "relative", zIndex: 2, flex: 1 }}>
        <Typography 
          variant="h4" 
          sx={{ fontWeight: "bold", mb: { xs: 2, md: 0 } }} // mobile pe gap button se
        >
          {heading}
        </Typography>
      </Box>

      <Box sx={{ position: "relative", zIndex: 2 }}>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#036161ff",
            color: "#fff",
            px: 4,
            py: 1.5,
            borderRadius: "30px",
            fontWeight: "bold",
            "&:hover": {
              bgcolor: "#e64a19",
            },
          }}
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
};

export default ButtonBgImageBanner;
