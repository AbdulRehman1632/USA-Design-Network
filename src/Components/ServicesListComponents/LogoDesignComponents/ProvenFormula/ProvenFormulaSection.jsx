import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";

const ProvenFormulaSection = () => {
  const cards = [
    {
      img: "https://res.cloudinary.com/dpm8fa6gn/image/upload/v1756210288/Conceptualization_bu6ga8.png",
      title: "Conceptualization",
      desc: "Good concept is the strongest pillar of beautifully constructed logo; our creative designers ensure the item we deliver is based on inimitable concept.",
    },
    {
      img: "https://res.cloudinary.com/dpm8fa6gn/image/upload/v1756210288/Design_bqixfm.png",
      title: "Design",
      desc: "At Logomines, we always ensure delivery of best designs irrespective of the project size and given time. We aim to create brand identity that is incomparable in terms of design.",
    },
    {
      img: "https://res.cloudinary.com/dpm8fa6gn/image/upload/v1756210288/Delivery_g6ials.png",
      title: "Delivery",
      desc: "We take pride in delivering the best in less time. For us there is nothing like short notice, so whenever you require quick delivery, you can count on us.",
    },
  ];

  return (
    <Box sx={{ textAlign: "center", py: 6, px: 2  }}>
      {/* Heading */}
      <Typography variant="h4" fontWeight="bold" gutterBottom >
        We’ve Got a Proven Formula for Success to Guarantee Results for Our Clients
      </Typography>

      {/* Paragraph */}
      <Typography variant="body1" color="text.secondary" maxWidth="700px" mx="auto" mb={4}>
        If it isn’t a 100% then it isn’t enough for us. To ensure each project is getting nothing but the best,
        we make sure we follow a set of rules that keep us on track in terms of results.
      </Typography>

      {/* Cards */}
      <Grid container spacing={4} justifyContent="center">
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{width:{md:"22%"}}}>
            <Box sx={{ textAlign: "center" }}>
              <img src={card.img} alt={card.title} style={{ width: 90, height: 90, marginBottom: 16 }} />
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

export default ProvenFormulaSection;
