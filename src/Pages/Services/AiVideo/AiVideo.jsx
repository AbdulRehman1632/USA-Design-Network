import React from 'react'
import ServicesCustomBanner from "../../../Utils/Constant/ServicesCustomBanner/ServicesCustomBanner"
import ServicesContentBanner from "../../../Utils/Constant/ServicesContentBannner/ServicesContentBanner"
import ButtonBgImageBanner from "../../../Utils/Constant/ButtonBgImageBanner/ButtonBgImageBanner"
import { aiVideoAnimationBannerData } from '../../../Components/ServicesListComponents/AiVideoComponent/AI'
import { tabData } from '../../../Components/HomeComponents/CreativeDesign/tabdata'
import CustomProjectsList from '../../../Utils/Constant/CustomProjectsList/CustomProjectsList'

const AiVideo = () => {
  return (
    <div>

        <ServicesCustomBanner image="https://res.cloudinary.com/dpm8fa6gn/image/upload/v1755961809/pexels-antoni-shkraba-4348404-1-scaled-1_pvd7nr.webp" 
  heading="AI VIDEO AND ANIMATION"/>


  <ServicesContentBanner {...aiVideoAnimationBannerData}/>
  <ButtonBgImageBanner heading="If You Want To Design Or Develop Your Project." 
  buttonText="Get a Quote"/>

  <CustomProjectsList content={tabData[7].content}/>
      
    </div>
  )
}

export default AiVideo
