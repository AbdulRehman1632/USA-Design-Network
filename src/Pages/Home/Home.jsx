import React from 'react'
import MainBanner from '../../Components/HomeComponents/MainBanner/MainBanner'
import Experience from '../../Components/HomeComponents/Experience/Experience'
import AwardWinning from '../../Components/HomeComponents/AwardWinning/AwardWinning'
import ServicesCards from '../../Components/ServicesComponents/ServicesCards/ServicesCards'
import { Box, Typography } from '@mui/material'
import CreativeDesign from '../../Components/HomeComponents/CreativeDesign/CreativeDesign'
import PricingCards from '../../Components/PricingComponents/PricingCards/PricingCards.jsx'
import TagYourTime from '../../Components/HomeComponents/TagYourTime/TagYourTime.jsx'
import AnimatedUnderlineHeading from '../../Utils/Constant/AnimatedUnderlineHeading/AnimatedUnderlineHeading.jsx'
import NewsLetterType from "../../Components/ContactComponents/NewsLetterType/NewsLetterType.jsx"



const Home = () => {
  return (
    <div>

    <MainBanner/>
    <Experience/>
    <Box sx={{ mt: 10 }}>
  <AnimatedUnderlineHeading text="Our Services" />
</Box>
    <ServicesCards limit={6} showButton={true}/>
    <AwardWinning/>
    <Box sx={{ mt: 10 }}>
  <AnimatedUnderlineHeading text="Our Creative Design" />
</Box>
    <CreativeDesign/>
      <Box sx={{ mt: 10 }}>
  <AnimatedUnderlineHeading text="Pricing Packages" />
</Box>

        <PricingCards limit={8}/>
        <TagYourTime/>
        <NewsLetterType/>
      
    </div>
  )
}

export default Home
