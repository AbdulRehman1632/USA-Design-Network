import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Grid,
  Button,
  CardActions
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // ✅ Icon import
import { pricingCardsdata } from "./PricingCards.js";

const PricingCards = ({ limit }) => {
  const displayPricingCards = limit
    ? pricingCardsdata.slice(0, limit)
    : pricingCardsdata;

  return (
    <Box mt={5} p={3}>
      <Grid container spacing={5} justifyContent="center">
        {displayPricingCards.map((plan, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                p: 2,
                borderRadius: 3,
                boxShadow: 3,
                backgroundColor: "white",
                color: "black",
                height: "100%",
                border: "2px solid gray",
                maxWidth: 320,
                width: "100%",
                display: "flex",
                flexDirection: "column",
                position: "relative"
              }}
            >
              {/* Best Seller Tag */}
              {plan.bestSeller && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 20,
                    right: -40,
                    bgcolor: "red",
                    color: "white",
                    px: 6,
                    py: 0.5,
                    transform: "rotate(45deg)",
                    fontSize: "14px",
                    fontWeight: "bold"
                  }}
                >
                  Best Seller
                </Box>
              )}

              <CardContent sx={{ flexGrow: 1 }}>
                {/* Heading */}
                <Typography
                  sx={{
                    backgroundColor: "black",
                    padding: "15px",
                    textAlign: "center"
                  }}
                  variant="h6"
                  fontWeight="bold"
                  gutterBottom
                >
                  {plan.heading}
                </Typography>

                {/* Price Section */}
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  gap={1}
                  mb={2}
                  mt={2}
                >
                  <Typography variant="h4" color="black" fontWeight="bold">
                    ${plan.price}
                  </Typography>
                  {plan.cutPrice && (
                    <Typography
                      variant="body1"
                      sx={{
                        textDecoration: "line-through",
                        color: "red !important"
                      }}
                    >
                      ${plan.cutPrice}
                    </Typography>
                  )}
                </Box>

                {/* Features List with Scroll */}
                <Box
                  sx={{
                    maxHeight: 250, // 👈 fixed height for scroll
                    overflowY: "auto",
                    pr: 1 // scrollbar overlap avoid
                  }}
                >
                  <List dense>
                    {Object.values(plan.lists).map((item, i) => (
                      <ListItem key={i} sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 30 }}>
                          <CheckCircleIcon sx={{ color: "green" }} />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "black" }} primary={item} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </CardContent>

              {/* Button */}
              <CardActions sx={{ justifyContent: "center", pb: 2 }}>
                <Button variant="contained" sx={{ backgroundColor: "black" }}>
                  Start Project
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PricingCards;
