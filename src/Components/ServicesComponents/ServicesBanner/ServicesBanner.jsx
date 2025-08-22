import React from "react";
import { Box, Typography } from "@mui/material";

const ServicesBanner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "60vh", // banner ki height
        backgroundImage: `url('https://res.cloudinary.com/dpm8fa6gn/image/upload/v1736881242/cld-sample-2.jpg')`, // apni image link daalna
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
      }}
    >
      {/* Overlay thoda dark effect ke liye */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.4)",
          zIndex: 1,
        }}
      />
      
      {/* Text Content */}
      <Box sx={{ position: "relative", zIndex: 2 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Services we offers
        </Typography>
        <Typography variant="h6">
          We provide world-class digital solutions for your business growth.
        </Typography>
      </Box>
    </Box>
  );
};

export default ServicesBanner;
