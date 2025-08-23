// import React from 'react'
// import { Grid, Typography, Button, Box } from "@mui/material";

// const Experience = () => {
//   return (
//      <Box sx={{ flexGrow: 1, py: 8, px: 4,  }}>
//       <Grid container spacing={4} alignItems="center" justifyContent="center">
        
//         {/* Left: Text */}
//         <Grid item xs={12} md={6} sx={{
//             width:{xs:"100%",md:"40%"}
//         }}>
//           <Typography variant="h3" fontWeight="bold" gutterBottom>
//            Hello we are,
// {" "}
//             <span style={{ color: "#1976d2" }}>American Design Network</span>
//           </Typography>
//           <Typography variant="body1" color="text.secondary" paragraph>
//             We're the bridge between creativity and strategy. Our mission is to drive your business's success through digital innovation, offering tailored solutions that work for you.
//           </Typography>
//           <Typography variant="body1" color="text.secondary" paragraph>
//             Digital Marketing Experts
//           </Typography>

//           <Box sx={{display:"flex",alignItems:"center",gap:"20px"}}>
//           <Typography variant="h1" fontWeight="bold" gutterBottom>
//            18 
// </Typography>
//            <Typography sx={{marginTop:"-25px",width:"50%"}} alignItems="center" variant='h5'>YEARS OF
// DIGITAL EXPERIENCE</Typography>

           
//           </Box> 
//         </Grid>

//         {/* Right: Image */}
//         <Grid item xs={12} md={6} textAlign="center">
//           <Box
//             component="img"
//             src="../assets/images/program.png"
//             alt="Website Development"
//             sx={{
//               maxWidth: "100%",
//               borderRadius: 3,
//               boxShadow: 4,
//             }}
//           />
//         </Grid>
//       </Grid>
//     </Box>
//   )
// }

// export default Experience


import React from 'react';
import { Grid, Typography, Box } from "@mui/material";
import { ReactTyped } from "react-typed";

const Experience = () => {
  return (
    
    <Box sx={{ flexGrow: 1, py: 8, px: 4 }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        
        {/* Left: Text */}
        <Grid item xs={12} md={6} sx={{
            width:{xs:"100%",md:"40%"}
         }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Hello we are,{" "}
            <span style={{ color: "#1976d2" }}>
              <ReactTyped
  strings={[
    "USA Design Network ",
  ]}
  typeSpeed={70}
  backSpeed={50}
  loop
/>
            </span>
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            We're the bridge between creativity and strategy. Our mission is to drive your business's success through digital innovation, offering tailored solutions that work for you.
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Digital Marketing Experts
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Typography variant="h1" fontWeight="bold" gutterBottom>
              18
            </Typography>
            <Typography sx={{ marginTop: "-25px", width: "50%" }} variant="h5">
              YEARS OF DIGITAL EXPERIENCE
            </Typography>
          </Box>
        </Grid>

        {/* Right: Image */}
        <Grid item xs={12} md={6} textAlign="center">
          <Box
            component="img"
            src="https://res.cloudinary.com/dpm8fa6gn/image/upload/v1755951430/blue-green-image-mountain-range-with-text-mountain_542670-2911_p7omix.avif"
            alt="Website Development"
            sx={{
              maxWidth: "100%",
              borderRadius: 3,
              boxShadow: 4,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Experience;

