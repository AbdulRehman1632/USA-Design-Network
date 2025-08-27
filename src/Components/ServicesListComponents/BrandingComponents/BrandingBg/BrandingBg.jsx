import React from "react";
import { Box, Button, Typography, Stack } from "@mui/material";

const Brandingbg = () => {
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(8, 8, 8, 0.46), rgba(0, 0, 0, 0.35)), url("https://res.cloudinary.com/dpm8fa6gn/image/upload/v1756294561/brand-management-branding-rebranding-concept-1-1-scaled_smaqjh.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        py: { xs: 12, md: 25 },
        textAlign: "center",
        // color: "#000", // text black for light bg
      }}
    >
      {/* Heading */}
      <Typography
        variant="h3"
        fontWeight="bold"
        gutterBottom
        sx={{ px: 2 }}
      >
        A <strong style={{ color: "teal" }}>Business’s</strong> Most Valuable{" "}
        <strong style={{ color: "teal" }}>Asset</strong> Is Perfect Branding
      </Typography>

      {/* Buttons */}
      <Box 
       mt={5} 
       sx={{ 
         display: "flex", 
         flexDirection: { xs: "column", sm: "row" }, // mobile = column, desktop = row
         gap: 2, // buttons ke beech space
         alignItems: "center", 
         justifyContent: "center" 
       }}
     >
       <Button variant="contained" color="primary" sx={{ px: 4 }}>
         Call Us Now
       </Button>
       <Button variant="outlined" color="primary" sx={{ px: 4 }}>
         Facebook Chat
       </Button>
     </Box>
    </Box>
  );
};

export default Brandingbg;
