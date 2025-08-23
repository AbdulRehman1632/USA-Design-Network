import React from 'react'
import PricingCards from '../../Components/PricingComponents/PricingCards/PricingCards.jsx'
import NewsLetterType from '../../Components/ContactComponents/NewsLetterType/NewsLetterType.jsx'
import AnimatedUnderlineHeading from '../../Utils/Constant/AnimatedUnderlineHeading/AnimatedUnderlineHeading.jsx'
import { Box } from '@mui/material'


const Pricing = () => {
  return (
    <div>
      <Box sx={{ mt: 20 }}>
  <AnimatedUnderlineHeading text="Our Pricing Packages" />
</Box>
      <PricingCards/>
      <Box sx={{marginTop:"150px"}}>
      <NewsLetterType/>
      </Box>
      
    </div>
  )
}

export default Pricing
