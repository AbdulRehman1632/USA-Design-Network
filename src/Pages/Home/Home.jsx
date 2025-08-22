import React from 'react'
import MainBanner from '../../Components/HomeComponents/MainBanner/MainBanner'
import Experience from '../../Components/HomeComponents/Experience/Experience'
import AwardWinning from '../../Components/HomeComponents/AwardWinning/AwardWinning'
import ServicesCards from '../../Components/ServicesComponents/ServicesCards/ServicesCards'
import { Box, Typography } from '@mui/material'
import CreativeDesign from '../../Components/HomeComponents/CreativeDesign/CreativeDesign'



const Home = () => {
  return (
    <div>

    <MainBanner/>
    <Experience/>
     <Box sx={{ display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Typography variant='h3'>Our Services</Typography>
        </Box>
    <ServicesCards limit={6} showButton={true}/>
    <AwardWinning/>
    <CreativeDesign/>
      
    </div>
  )
}

export default Home
