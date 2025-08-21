import React from "react";
import { Container, Typography, Box } from "@mui/material";


const AwardWinning = () => {
  return (
    <Container
      
      sx={{
        textAlign: "center",
        py: 8,
      }}
    >
      {/* Heading */}
      <Typography
        variant="h3"
        fontWeight="bold"
        gutterBottom
        sx={{ color: "white" }}
      >
        Award Winning Digital Marketing Agency
      </Typography>

      {/* Paragraph */}
      <Typography
        variant="body1"
        sx={{ color: "text.secondary", mb: 4 }}
      >
        For more than 18 years. USA Design Network has been recognized as a top-rated digital marketing company by some of the industry’s leading review sites. including SEOblog. Clutch. UpCity and InfluencerMarketingHub.
      </Typography>

      <Typography
        variant="body1"
        sx={{ color: "text.secondary", mb: 4 }}
      >
        In 2021, USA Design Network conquered another milestone, having been named to the Inc. 5000 list of fastest-growing companies in America for the fifth consecutive year. According to Inc.. only 4 percent of the companies featured in the annual Inc. 5000 since 1982 have made the list five consecutive years. We continuously optimize our processes to ensure the company remains our clients’ go-to digital marketing service provider. For more than 16 years. USA Design Network has been recognized as a top-rated digital marketing company by some of the industry’s leading review sites. including SEOblog. Clutch. UpCity and InfluencerMarketingHub. In 2021, USA Design Network conquered another milestone, having been named to the Inc. 5000 list of fastest-growing companies in America for the fifth consecutive year. According to Inc.. only 4 percent of the companies featured in the annual Inc. 5000 since 1982 have made the list five consecutive years. We continuously optimize our processes to ensure the company remains our clients’ go-to digital marketing service provider.
      </Typography>

      {/* Image */}
      <Box
        component="img"
        src='https://res.cloudinary.com/dpm8fa6gn/image/upload/v1755791052/Label-banner-2-880x126_iazcw2.png'
        alt="Award Winning"
        sx={{
          width: "100%",
          maxWidth: 600,
          mx: "auto",
          borderRadius: 2,
          boxShadow: 3,
        }}
      />
    </Container>
  );
};

export default AwardWinning;
