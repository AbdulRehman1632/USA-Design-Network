import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  Dialog,
  IconButton,
} from "@mui/material";
import { Close, ArrowBack, ArrowForward } from "@mui/icons-material";
import AnimatedUnderlineHeading from "../../../../Utils/Constant/AnimatedUnderlineHeading/AnimatedUnderlineHeading";
import { tabData } from "../../../HomeComponents/CreativeDesign/tabdata";

const IndustriesSection = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Get logos from tabData
  const logos = tabData.find((tab) => tab.label === "Logo Design").content;

  // Group by industry name
  const groupedIndustries = logos.reduce((acc, item) => {
    if (!acc[item.name]) {
      acc[item.name] = [];
    }
    acc[item.name].push(item);
    return acc;
  }, {});

  // List of unique industry names
  const industryNames = Object.keys(groupedIndustries);

  // ✅ set first industry as default
  const [selectedIndustry, setSelectedIndustry] = useState(industryNames[0]);

  // Split industry names into columns of 6
  const columns = [];
  for (let i = 0; i < industryNames.length; i += 6) {
    columns.push(industryNames.slice(i, i + 6));
  }

  // Selected industry logos
  const displayContent = selectedIndustry ? groupedIndustries[selectedIndustry] : [];

  // Handlers
  const handleOpen = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const handleNext = () =>
    setCurrentIndex((prev) => (prev + 1) % displayContent.length);
  const handlePrev = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + displayContent.length) % displayContent.length
    );

  return (
    <Box sx={{ p: { xs: 3, md: 6 }, textAlign: "center" }}>
      <Box sx={{ mt: 10 }}>
        <AnimatedUnderlineHeading text="INDUSTRIES WE SERVE" />
      </Box>

      {/* Industries List */}
      <Grid container spacing={4} justifyContent="center">
        {columns.map((col, idx) => (
          <Grid item xs={12} sm={6} md={2.4} key={idx}>
            <List sx={{ textAlign: "left" }}>
              {col.map((name, i) => (
                <ListItem
                  key={i}
                  sx={{
                    p: 0.5,
                    fontSize: "1rem",
                    cursor: "pointer",
                    fontWeight: selectedIndustry === name ? "bold" : "normal",
                    color: selectedIndustry === name ? "primary.main" : "inherit",
                    "&:hover": { color: "primary.main" },
                  }}
                  onClick={() => setSelectedIndustry(name)}
                >
                  {name}
                </ListItem>
              ))}
            </List>
          </Grid>
        ))}
      </Grid>

      {/* Logos Grid */}
      {selectedIndustry && (
        <Box sx={{ mt: 4, px: 4 }}>
          <Typography variant="h4" gutterBottom>
            {selectedIndustry} Logos
          </Typography>
          <Grid container spacing={2}>
            {displayContent.map((item, index) => (
              <Grid
                sx={{ width: { xs: "100%", md: "24%" }, marginTop: "20px" }}
                item
                xs={12}
                sm={6}
                md={3}
                key={index}
              >
                <img
                  src={item.src}
                  alt={item.name}
                  style={{
                    width: "100%",
                    borderRadius: "12px",
                    cursor: "pointer",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                  }}
                  onClick={() => handleOpen(index)}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {/* Preview Modal */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        disableScrollLock
        PaperProps={{
          sx: { overflow: "hidden", backgroundColor: "black" },
        }}
      >
        <Box sx={{ position: "relative", bgcolor: "black" }}>
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", top: 10, right: 10, color: "white" }}
          >
            <Close />
          </IconButton>
          <IconButton
            onClick={handlePrev}
            sx={{ position: "absolute", top: "50%", left: 10, color: "white" }}
          >
            <ArrowBack />
          </IconButton>
          <IconButton
            onClick={handleNext}
            sx={{ position: "absolute", top: "50%", right: 10, color: "white" }}
          >
            <ArrowForward />
          </IconButton>

          <img
            src={displayContent[currentIndex]?.src}
            alt="preview"
            style={{
              maxHeight: "80vh",
              maxWidth: "90vw",
              margin: "auto",
              display: "block",
            }}
          />
        </Box>
      </Dialog>
    </Box>
  );
};

export default IndustriesSection;
