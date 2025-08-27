import React, { useState } from "react";
import {
  Box,
  Grid,
  Dialog,
  IconButton,
} from "@mui/material";
import { Close, ArrowBack, ArrowForward } from "@mui/icons-material";
import AnimatedUnderlineHeading from "../AnimatedUnderlineHeading/AnimatedUnderlineHeading";

const CustomProjectsList = ({ content }) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? content.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === content.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* Grid of projects */}
      <Box sx={{ mt: 4, px: 4 }}>
         <Box sx={{ mt: 10 }}>
  <AnimatedUnderlineHeading text="Our Portfolio" />
</Box>
        <Grid container spacing={2}>
          {content.map((item, index) => (
            <Grid
              sx={{ width: { xs: "100%", md: "24%" } }}
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
            >
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

      {/* Modal Preview */}
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
          {/* Close */}
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", top: 10, right: 10, color: "white" }}
          >
            <Close />
          </IconButton>
          {/* Prev */}
          <IconButton
            onClick={handlePrev}
            sx={{ position: "absolute", top: "50%", left: 10, color: "white" }}
          >
            <ArrowBack />
          </IconButton>
          {/* Next */}
          <IconButton
            onClick={handleNext}
            sx={{ position: "absolute", top: "50%", right: 10, color: "white" }}
          >
            <ArrowForward />
          </IconButton>

          {content[currentIndex]?.type === "image" ? (
            <img
              src={content[currentIndex].src}
              alt="preview"
              style={{
                maxHeight: "80vh",
                maxWidth: "90vw",
                margin: "auto",
                display: "block",
              }}
            />
          ) : (
            <video
              src={content[currentIndex].src}
              controls
              autoPlay
              style={{
                maxHeight: "80vh",
                maxWidth: "90vw",
                margin: "auto",
                display: "block",
              }}
            />
          )}
        </Box>
      </Dialog>
    </>
  );
};

export default CustomProjectsList;
