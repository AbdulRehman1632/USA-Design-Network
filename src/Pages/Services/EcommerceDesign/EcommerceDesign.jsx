import React from 'react'
import ServicesCustomBanner from '../../../Utils/Constant/ServicesCustomBanner/ServicesCustomBanner'
import EcomBannerData, { ecommerceFaqs, ecommercePricingData } from '../../../Components/ServicesListComponents/EcommerceDesignComponents/EcommerceData'
import ServicesContentBanner from '../../../Utils/Constant/ServicesContentBannner/ServicesContentBanner'
import ButtonBgImageBanner from '../../../Utils/Constant/ButtonBgImageBanner/ButtonBgImageBanner'
import CustomProjectsList from '../../../Utils/Constant/CustomProjectsList/CustomProjectsList'
import { tabData } from '../../../Components/HomeComponents/CreativeDesign/tabdata'
import CustomServicesPricing from '../../../Utils/Constant/CustomServicesPricing/CustomServicesPricing'
import NewsLetterType from '../../../Components/ContactComponents/NewsLetterType/NewsLetterType'
import Technologies from '../../../Components/ServicesListComponents/WebsiteDesignComponents/Technologies/Technologies'
import CustomFaqs from '../../../Utils/Constant/Customfaqs/Customfaqs'

const EcommerceDesign = () => {
  return (
    <>
     <ServicesCustomBanner 
      image="https://res.cloudinary.com/dpm8fa6gn/image/upload/v1755961809/pexels-antoni-shkraba-4348404-1-scaled-1_pvd7nr.webp" 
      heading="ECOMMERCE WEBSITE DESIGN AND DEVELOPMENT" 
    />

    <ServicesContentBanner {...EcomBannerData}/>

  <ButtonBgImageBanner
  heading="If You Want To Design Or Develop Your Project."
  buttonText="Get a Quote"
  />

<CustomProjectsList content={tabData[4].content} />

<Technologies/>

<CustomServicesPricing pricingData={ecommercePricingData}/>

<CustomFaqs faqs={ecommerceFaqs}/>

<NewsLetterType/>
      
    </>
  )
}

export default EcommerceDesign
