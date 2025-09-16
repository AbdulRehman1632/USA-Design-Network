import React from 'react'
import ServicesCustomBanner from '../../../Utils/Constant/ServicesCustomBanner/ServicesCustomBanner'
import ButtonBgImageBanner from '../../../Utils/Constant/ButtonBgImageBanner/ButtonBgImageBanner'
import CustomProjectsList from '../../../Utils/Constant/CustomProjectsList/CustomProjectsList'
import { tabData } from '../../../Components/HomeComponents/CreativeDesign/tabdata'
import Technologies from '../../../Components/ServicesListComponents/WebsiteDesignComponents/Technologies/Technologies'
import ServicesContentBanner from '../../../Utils/Constant/ServicesContentBannner/ServicesContentBanner'
import { mobileAppFaqs, MobileDevBannerData, mobilePricingData } from '../../../Components/ServicesListComponents/MobileApplicationsComponents/MobileAppData'
import CustomServicesPricing from '../../../Utils/Constant/CustomServicesPricing/CustomServicesPricing'
import CustomFaqs from '../../../Utils/Constant/Customfaqs/Customfaqs'
import NewsLetterType from '../../../Components/ContactComponents/NewsLetterType/NewsLetterType'

const MobileApplication = () => {
  return (
    <>
    <ServicesCustomBanner image="https://res.cloudinary.com/dpm8fa6gn/image/upload/v1755961809/pexels-antoni-shkraba-4348404-1-scaled-1_pvd7nr.Mobilep" 
  heading="MOBILE APPLICATION DEVELOPMENT"/>

  <ServicesContentBanner {...MobileDevBannerData}/>

  <ButtonBgImageBanner
  heading="If You Want To Design Or Develop Your Project."
  buttonText="Get a Quote"
/>

<CustomProjectsList content={tabData[5].content} />

<Technologies/>

<CustomServicesPricing pricingData={mobilePricingData}/>

<CustomFaqs faqs={mobileAppFaqs}/>

<NewsLetterType/>


    </>
  )
}

export default MobileApplication
