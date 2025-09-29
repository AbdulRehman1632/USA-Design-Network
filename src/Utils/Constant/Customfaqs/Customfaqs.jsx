import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AnimatedUnderlineHeading from "../AnimatedUnderlineHeading/AnimatedUnderlineHeading";
import { StarBorder } from "@mui/icons-material";

const CustomFaqs = ({ faqs }) => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        py: 6,
        px: { xs: 2, md: 6 },
        textAlign: "center",
      }}
    >
      {/* Heading */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "bold", mb: 4 }}
      >

         <Box sx={{ mt: 0 }}>
          <AnimatedUnderlineHeading text="Frequently Asked Questions" />
        </Box>
        
      </Typography>

      {/* FAQs */}
      <Box
        sx={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "left",
        }}
      >
        {faqs.map((faq, index) => (
      
          <Accordion
            key={index}
            sx={{
              backgroundColor: "#1c1c1c",
              color: "white",
              mb: 2,
              boxShadow: "none",
              "&:before": { display: "none" }, // remove default divider line
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" sx={{ color: "grey.300" }}>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default CustomFaqs;
