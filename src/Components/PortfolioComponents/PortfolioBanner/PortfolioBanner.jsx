import React from "react";
import { Box, Typography } from "@mui/material";

const PortfolioBanner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "60vh", // jitna banner chahiye utna rakho (adjust karlo)
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        borderRadius: 3,
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        {/* <source src="https://www.w3schools.com/howto/rain.mp4" type="video/mp4" /> */}
      </video>

      {/* Overlay for dark effect */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0,0,0,0.4)",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      />

      {/* Centered Heading */}
      <Typography
        variant="h3"
        sx={{
          color: "#fff",
          fontWeight: "bold",
          textAlign: "center",
          zIndex: 1,
        }}
      >
        Our Creative Portfolio
      </Typography>
    </Box>
  );
};

export default PortfolioBanner;
