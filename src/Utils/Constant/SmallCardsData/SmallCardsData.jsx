import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";

const SmallCardsData = ({ headingData, cardsData }) => {
  return (
    <Box sx={{ textAlign: "center", py: 6, px: 2 }}>
      {/* Heading */}
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        {headingData.title}
      </Typography>

      {/* Paragraph */}
      <Typography
        variant="body1"
        color="text.secondary"
        maxWidth="700px"
        mx="auto"
        mb={4}
      >
        {headingData.description}
      </Typography>

      {/* Cards */}
      <Grid container spacing={8} justifyContent="center">
        {cardsData.map((card, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{ width: { md: "24%" } }}
          >
            <Box sx={{ textAlign: "center" }}>
              <img
                src={card.img}
                alt={card.title}
                style={{ width: 90, height: 90, marginBottom: 16 }}
              />
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.desc}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

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

export default SmallCardsData;
