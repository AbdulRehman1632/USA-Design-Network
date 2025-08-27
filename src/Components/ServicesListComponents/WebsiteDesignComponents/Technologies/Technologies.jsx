import React from "react";
import { Box, Typography } from "@mui/material";
import AnimatedUnderlineHeading from "../../../../Utils/Constant/AnimatedUnderlineHeading/AnimatedUnderlineHeading";

const Technologies = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // horizontally center
        justifyContent: "center", // vertically center
        textAlign: "center",
        minHeight: "100vh", // full screen center
        p: 3,
      }}
    >
      {/* Heading */}
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", mb: 3 }}
      >
        <Box sx={{ mt: 0 }}>
  <AnimatedUnderlineHeading text="Technologies We Use" />
</Box>
      </Typography>

      {/* Image */}
      <Box
        component="img"
        src="https://res.cloudinary.com/dpm8fa6gn/image/upload/v1756292861/stack-880x330_pztfsu.webp"
        alt="Web Development"
        sx={{
          width: "1000px",
          height: "auto",
          borderRadius: 3,
          boxShadow: 3,
        }}
      />
    </Box>
  );
};

export default Technologies;
