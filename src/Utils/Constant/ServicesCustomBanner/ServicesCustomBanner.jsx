import React from "react";
import { Box, Typography } from "@mui/material";
import { ReactTyped } from "react-typed";

const ServicesCustomBanner = ({ image, heading }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "300px", sm: "400px", md: "500px" }, // responsive height
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 2,
        // opacity:"0.5",
        overflow: "hidden",
      }}
    >
      {/* Overlay for dim effect */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(12, 12, 12, 0.77)",
        }}
      />

    
      <Typography
  variant="h3"
  fontWeight="bold"
  gutterBottom
  sx={{
    color: "#fff", // 👈 yahan daalo
    position: "relative",
    textAlign: "center"
  }}
>
  <ReactTyped
    strings={[heading]}
    typeSpeed={70}
    backSpeed={50}
    loop
  />
</Typography>
    </Box>
  );
};

export default ServicesCustomBanner;
