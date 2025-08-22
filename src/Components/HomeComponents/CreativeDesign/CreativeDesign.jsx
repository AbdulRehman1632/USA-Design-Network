import React, { useState } from "react";
import { Box, Tabs, Tab, Grid, Dialog, IconButton, Typography } from "@mui/material";
import { ArrowBack, ArrowForward, Close } from "@mui/icons-material";
import { tabData } from "./tabdata";


const CreativeDesign = () => {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setOpen(false); // tab change par preview band ho jaye
  };

  const handleOpen = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? tabData[value].content.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === tabData[value].content.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
    <Box sx={{ display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Typography variant='h3'>Our Creative Design</Typography>
            </Box>
    <Box sx={{ width: "100%", textAlign: "center", mt: 5 }}>
      {/* Tabs */}
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        sx={{
          "& .MuiTab-root": { fontSize: "16px", fontWeight: "bold" },
        }}
      >
        {tabData.map((tab, index) => (
          <Tab key={index} label={tab.label} />
        ))}
      </Tabs>

      {/* Tab Content */}
      <Box sx={{ mt: 4, px: 4 }}>
        <Grid container spacing={2}>
          {tabData[value].content.map((item, index) => (
            <Grid width="24%" item xs={12} sm={6} md={3} key={index}>
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={`media-${index}`}
                  style={{
                    width: "100%",
                    borderRadius: "12px",
                    cursor: "pointer",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                  }}
                  onClick={() => handleOpen(index)}
                />
              ) : (
                <video
                  src={item.src}
                  controls
                  style={{
                    height: "200px",
                    width: "100%",
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                  }}
                />
              )}
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Preview Modal */}
     <Dialog 
  open={open} 
  onClose={handleClose} 
  maxWidth="md" 
  disableScrollLock
  PaperProps={{
    sx: { overflow: "hidden", backgroundColor: "black" }
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

    {tabData[value].content[currentIndex]?.type === "image" ? (
      <img
        src={tabData[value].content[currentIndex].src}
        alt="preview"
        style={{ maxHeight: "80vh", maxWidth: "90vw", margin: "auto", display: "block" }}
      />
    ) : (
      <video
        src={tabData[value].content[currentIndex].src}
        controls
        autoPlay
        style={{ maxHeight: "80vh", maxWidth: "90vw", margin: "auto", display: "block" }}
      />
    )}
  </Box>
</Dialog>

    </Box>
    </>
  );
};


export default CreativeDesign;
