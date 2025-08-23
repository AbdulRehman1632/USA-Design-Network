import React from 'react'
import PortfolioBanner from '../../Components/PortfolioComponents/PortfolioBanner/PortfolioBanner'
import CreativeDesign from '../../Components/HomeComponents/CreativeDesign/CreativeDesign'
import NewsLetterType from '../../Components/ContactComponents/NewsLetterType/NewsLetterType'
import { Box } from '@mui/material'

const Portfolio = () => {
  return (
    <div>
        <PortfolioBanner/>
        <CreativeDesign/>
        <Box sx={{marginTop:"150px"}}>
        <NewsLetterType/>
        </Box>


      
    </div>
  )
}

export default Portfolio
