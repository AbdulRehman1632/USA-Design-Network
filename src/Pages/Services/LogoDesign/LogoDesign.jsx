import React from 'react'
import ServicesCustomBanner from '../../../Utils/Constant/ServicesCustomBanner/ServicesCustomBanner'
import ServicesContentBanner from '../../../Utils/Constant/ServicesContentBannner/ServicesContentBanner'
import logoBannerData, { logoFaqData, logoPricingData } from '../../../Components/ServicesListComponents/LogoDesignComponents/LogoDesignData.js'
import ButtonBgImageBanner from '../../../Utils/Constant/ButtonBgImageBanner/ButtonBgImageBanner'
import IndustriesSection from '../../../Components/ServicesListComponents/LogoDesignComponents/IndustriesSection/IndustriesSection'
import ProvenFormulaSection from '../../../Components/ServicesListComponents/LogoDesignComponents/ProvenFormula/ProvenFormulaSection'
import CustomServicesPricing from '../../../Utils/Constant/CustomServicesPricing/CustomServicesPricing'
import CustomFaqs from '../../../Utils/Constant/Customfaqs/Customfaqs.jsx'
import NewsLetterType from '../../../Components/ContactComponents/NewsLetterType/NewsLetterType.jsx'

const LogoDesign = () => {
  return (
    <>
    <ServicesCustomBanner 
  image="https://res.cloudinary.com/dpm8fa6gn/image/upload/v1755961809/pexels-antoni-shkraba-4348404-1-scaled-1_pvd7nr.webp" 
  heading="LOGO DESIGN" 
/>
<ServicesContentBanner {...logoBannerData}/>
<ButtonBgImageBanner
  heading="If You Want To Design Or Develop Your Project."
  buttonText="Get a Quote"
/>

<IndustriesSection/>
<ProvenFormulaSection/>
<CustomServicesPricing pricingData={logoPricingData}/>
<CustomFaqs faqs={logoFaqData}/>
 <NewsLetterType/>

</>
  )
}

export default LogoDesign
