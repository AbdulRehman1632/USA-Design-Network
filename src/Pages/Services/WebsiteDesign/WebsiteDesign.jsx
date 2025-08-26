import React from 'react'
import ServicesCustomBanner from '../../../Utils/Constant/ServicesCustomBanner/ServicesCustomBanner'
import { webDevBannerData } from '../../../Components/ServicesListComponents/WebsiteDesignComponents/webDesign'
import ServicesContentBanner from '../../../Utils/Constant/ServicesContentBannner/ServicesContentBanner'
import ButtonBgImageBanner from '../../../Utils/Constant/ButtonBgImageBanner/ButtonBgImageBanner'

const WebsiteDesign = () => {
  return (
    <>
        <ServicesCustomBanner image="https://res.cloudinary.com/dpm8fa6gn/image/upload/v1755961809/pexels-antoni-shkraba-4348404-1-scaled-1_pvd7nr.webp" 
  heading="WEB DESIGN AND DEVELOPMENT"/>

  <ServicesContentBanner {...webDevBannerData}/>

  <ButtonBgImageBanner
  heading="If You Want To Design Or Develop Your Project."
  buttonText="Get a Quote"
/>
      
    </>
  )
}

export default WebsiteDesign
