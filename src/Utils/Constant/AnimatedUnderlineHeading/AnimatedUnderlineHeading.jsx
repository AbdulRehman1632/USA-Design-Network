import React from "react";
import { Box, Typography } from "@mui/material";

/**
 * Reusable heading with an animated curved/gradient stroke underline.
 *
 * Props:
 * - text: string (heading text)
 * - align: "left" | "center" | "right" (default "center")
 * - variant: MUI Typography variant (default "h3")
 * - gradient: [startColor, endColor] (default ["#1976d2", "#42a5f5"])
 * - strokeWidth: number (default 4)
 * - dur: string (animation duration, default "2s")
 * - sx: MUI sx prop to extend container styles
 */
const AnimatedUnderlineHeading = ({
  text = "Heading",
  align = "center",
  variant = "h3",
  gradient = ["#1976d2", "#42a5f5"],
  strokeWidth = 4,
  dur = "2s",
  sx = {},
}) => {
  // position tweak for underline based on alignment
  const justify =
    align === "left" ? "flex-start" : align === "right" ? "flex-end" : "center";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: justify,
        position: "relative",
        ...sx,
      }}
    >
      <Typography variant={variant} sx={{ fontWeight: "bold", textAlign: align }}>
        {text}
      </Typography>

      {/* Elegant curved stroke */}
      <Box
        component="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 50"
        sx={{
          mt: 1,
          width: { xs: 220, sm: 260, md: 300 }, // responsive width
          height: 50,
        }}
      >
        {/* Gradient for premium look */}
        <defs>
          <linearGradient id="grad-underline" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={gradient[0]} />
            <stop offset="100%" stopColor={gradient[1]} />
          </linearGradient>
        </defs>

        {/* Curve path (cubic bezier) */}
        <path
          d="M20 30 C 80 10, 220 10, 280 30"
          fill="transparent"
          stroke="url(#grad-underline)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray="400"
          strokeDashoffset="400"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="400"
            to="0"
            dur={dur}
            fill="freeze"
          />
        </path>
      </Box>
    </Box>
  );
};

export default AnimatedUnderlineHeading;
