import React from 'react'
import ServicesCustomBanner from '../../../Utils/Constant/ServicesCustomBanner/ServicesCustomBanner'
import ServicesContentBanner from '../../../Utils/Constant/ServicesContentBannner/ServicesContentBanner'
import brandingBannerData, { brandCardsData, BrandheadingData, brandingFaqs, brandingPackages } from '../../../Components/ServicesListComponents/BrandingComponents/Branding'
import ButtonBgImageBanner from '../../../Utils/Constant/ButtonBgImageBanner/ButtonBgImageBanner'
import Brandingbg from '../../../Components/ServicesListComponents/BrandingComponents/BrandingBg/BrandingBg'
import SmallCardsData from '../../../Utils/Constant/SmallCardsData/SmallCardsData'
import CustomProjectsList from '../../../Utils/Constant/CustomProjectsList/CustomProjectsList'
import { tabData } from '../../../Components/HomeComponents/CreativeDesign/tabdata'
import CustomServicesPricing from '../../../Utils/Constant/CustomServicesPricing/CustomServicesPricing'
import CustomFaqs from '../../../Utils/Constant/Customfaqs/Customfaqs'
import NewsLetterType from '../../../Components/ContactComponents/NewsLetterType/NewsLetterType'

const Branding = () => {
  return (
    <>
     <ServicesCustomBanner 
  image="https://res.cloudinary.com/dpm8fa6gn/image/upload/v1755961809/pexels-antoni-shkraba-4348404-1-scaled-1_pvd7nr.webp" 
  heading="BRANDING" 
/>

<ServicesContentBanner {...brandingBannerData}/>

<Brandingbg/>

<SmallCardsData headingData={BrandheadingData}
  cardsData={brandCardsData}/>

<ButtonBgImageBanner
  heading="If You Want To Design Or Develop Your Project."
  buttonText="Get a Quote"
/>

<CustomProjectsList content={tabData[3].content} />

<CustomServicesPricing pricingData={brandingPackages}/>

<CustomFaqs faqs={brandingFaqs}/>

 <NewsLetterType/>




      
    </>
  )
}

export default Branding
