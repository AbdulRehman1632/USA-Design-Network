import React from "react";
import { Grid, Box, Typography, Button, CardActions } from "@mui/material";

const TagYourTime = () => {
  return (
    <Box
  sx={{
    flexGrow: 1,
    py: 6,

    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  }}
>
  <Grid container>
    {/* Left Side */}
    <Grid item xs={12} md={6}>
      <Box sx={{ p: 10,  borderRadius: 2 }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            position: "relative",
            mb: 2,
            "&::before": {
              content: '"Tag Your Time"',
              position: "absolute",
              top: -40,
              left: 0,
              fontSize: "4rem",
              fontWeight: "bold",
              opacity: 0.1,
              color: "white",
              zIndex: -1,
            },
          }}
        >
          Tag Your Time
        </Typography>

        <Typography variant="body1" sx={{ mb: 3 ,width:{xs:"100%",md:"90%"} }}>
          Manage your tasks efficiently and stay on top of your schedule
          with our easy-to-use time tracking system.
        </Typography>

        <Typography variant="body1" sx={{ mb: 1 }}>
          📧 Email: contact@company.com
        </Typography>
        <Typography variant="body1">📞 Phone: +92 300 1234567</Typography>

          <CardActions sx={{ marginTop:"40px", pb: 2}}>
                         <Button variant="contained" sx={{ backgroundColor: "black",border:"1px solid white"  }}>
                           Contact US
                         </Button>
                       </CardActions>
      </Box>
    </Grid>

    {/* Right Side */}
    <Grid item xs={12} md={6}>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        //   p: 4,
          marginLeft:{
            md:"-300px"
          }
        }}
      >
        <Box
          component="img"
          src="https://res.cloudinary.com/dpm8fa6gn/image/upload/v1755951941/man-suit-stands-front-blue-background_1373844-2763-fotor-bg-remover-20250823172532_lilwoq.png"
          alt="Tag Time"
          sx={{ width: {
            md:"100%",xs:"100%"
          }, borderRadius: 2 }}
        />
      </Box>
     
    </Grid>
  </Grid>
</Box>

  );
};

export default TagYourTime;
