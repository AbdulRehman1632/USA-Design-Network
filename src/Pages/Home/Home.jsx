import React from 'react'
import MainBanner from '../../Components/HomeComponents/MainBanner/MainBanner'
import Experience from '../../Components/HomeComponents/Experience/Experience'
import ServicesCards from '../../Components/HomeComponents/ServicesCards/ServicesCards'
import AwardWinning from '../../Components/HomeComponents/AwardWinning/AwardWinning'



const Home = () => {
  return (
    <div>

    <MainBanner/>
    <Experience/>
    <ServicesCards/>
    <AwardWinning/>
      
    </div>
  )
}

export default Home
