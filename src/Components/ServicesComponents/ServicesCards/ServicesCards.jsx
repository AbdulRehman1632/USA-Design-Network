import React from 'react'
import { Grid, Card, CardContent, Typography, Box , Button} from "@mui/material";
import { servicescards } from './ServicesCardsData';
import { ReactTyped } from 'react-typed';
import { useNavigate } from 'react-router';

const ServicesCards = ({ limit,showButton }) => {

   const displayServices = limit ? servicescards.slice(0, limit) : servicescards;

  const navigate = useNavigate()
  return (
    <>
   
    <Box sx={{ py: 8, px: 4,}}>
      <Grid container  sx={{display:"flex",justifyContent:"center",alignItems:"center" }}> 
      {displayServices.map((service, index) => ( 
          <Grid item xs={12} sm={6} md={4} key={index} sx={{padding:{
            xs:"0px",
            md:"60px",
          },width:{
            xs:"100%",
            md:"27%"
          }}} alignItems="center"> 
            <Card
              sx={{
                height: "100%",
                textAlign: "center",
                background: service.background,
                // borderRadius: 3,
                // boxShadow: 3,
                transition: "0.3s",
                "&:hover": { transform: "translateY(-8px)", boxShadow: 6 },
              }}
            >
              <CardContent>
                {/* Logo */}
                <Box
                  component="img"
                  src={service.logo}
                  alt={service.heading}
                  sx={{ height: 80, mx: "auto", mb: 2 }}
                />

                {/* Heading */}
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  {/* {service.heading} */}
                   <ReactTyped
                     strings={[service.heading]}
                    typeSpeed={70}
                    backSpeed={50}
                    loop
                  />
                </Typography>

                {/* Paragraph */}
                <Typography sx={{fontSize:"16px"}} variant="body2" color="text.secondary">
                  {service.para}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
        {/* Button (Conditional) */}
        {showButton && (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
            <Button
              variant="contained"
              sx={{ borderRadius: 5, px: 4, py: 1.2 }}
              onClick={() => navigate("/Services")}
            >
              More Services
            </Button>
          </Box>
        )}
    </Box>
    </>
  );
}

export default ServicesCards



// import { keyframes } from "@mui/system";

// const rotateBorder = keyframes`
//   0% { transform: rotate(0deg); }
//   100% { transform: rotate(360deg); }
// `;

// <Card
//   sx={{
//     position: "relative",
//     height: "100%",
//     textAlign: "center",
//     background: service.background,
//     borderRadius: 3,
//     overflow: "hidden",
//     transition: "0.3s",
//     "&:hover": { transform: "translateY(-8px)", boxShadow: 6 },

//     // animated border line
//     "&::before": {
//       content: '""',
//       position: "absolute",
//       top: "-2px",
//       left: "-2px",
//       right: "-2px",
//       bottom: "-2px",
//       borderRadius: 3,
//       padding: "2px",
//       background: "conic-gradient(red, orange, yellow, green, cyan, blue, violet, red)",
//       WebkitMask:
//         "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
//       WebkitMaskComposite: "xor",
//       maskComposite: "exclude",
//       animation: `${rotateBorder} 4s linear infinite`,
//     },
//   }}
// >
//   <CardContent>
//     {/* Logo */}
//     <Box
//       component="img"
//       src={service.logo}
//       alt={service.heading}
//       sx={{ height: 80, mx: "auto", mb: 2 }}
//     />

//     {/* Heading */}
//     <Typography variant="h5" fontWeight="bold" gutterBottom>
//       <ReactTyped
//         strings={[service.heading]}
//         typeSpeed={70}
//         backSpeed={50}
//         loop
//       />
//     </Typography>

//     {/* Paragraph */}
//     <Typography sx={{ fontSize: "16px" }} variant="body2" color="text.secondary">
//       {service.para}
//     </Typography>
//   </CardContent>
// </Card>
