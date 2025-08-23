import React from 'react'
import ServicesCustomBanner from '../../../Utils/Constant/ServicesCustomBanner/ServicesCustomBanner'
import ServicesContentBanner from '../../../Utils/Constant/ServicesContentBannner/ServicesContentBanner'
import logoBannerData from '../../../Components/ServicesListComponents/LogoDesignComponents/LogoDesignData'

const LogoDesign = () => {
  return (
    <>
    <ServicesCustomBanner 
  image="https://res.cloudinary.com/dpm8fa6gn/image/upload/v1755961809/pexels-antoni-shkraba-4348404-1-scaled-1_pvd7nr.webp" 
  heading="LOGO DESIGN" 
/>
<ServicesContentBanner {...logoBannerData}/>

</>
  )
}

export default LogoDesign
