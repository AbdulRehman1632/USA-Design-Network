import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Grid,
  Button,
} from "@mui/material";
import { pricingCardsdata } from "./PricingCards.js";

const PricingCards = () => {
  return (
    <Box mt={20} p={3}>
      <Grid container spacing={3} justifyContent="center">
        {pricingCardsdata.map((plan, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                p: 2,
                borderRadius: 3,
                boxShadow: 3,
                backgroundColor: "black",
                color: "white",
                height: "100%",
                border:"2px solid gray"
              }}
            >
              <CardContent>
                {/* Heading */}
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {plan.heading}
                </Typography>

                {/* Price Section */}
                <Box display="flex" alignItems="center" gap={1} mb={2}>
                  <Typography variant="h4" color="primary" fontWeight="bold">
                    ${plan.price}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ textDecoration: "line-through", color: "gray" }}
                  >
                    ${plan.cutPrice}
                  </Typography>
                </Box>

                {/* Features List */}
                <List dense>
                  {Object.values(plan.lists).map((item, i) => (
                    <ListItem  key={i} sx={{ py: 0.5 }}>
                      <ListItemText  primary={item} />
                    </ListItem>
                  ))}
                </List>

                <Box sx={{display:"flex",justifyContent:"center",alignItems:"self-end"}}>
                <Button sx={{border:"1px solid white",padding:"10px"}}>Start Project</Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PricingCards;
