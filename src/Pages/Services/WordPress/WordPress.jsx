import React from 'react'
import ServicesCustomBanner from "../../../Utils/Constant/ServicesCustomBanner/ServicesCustomBanner"
import ServicesContentBanner from '../../../Utils/Constant/ServicesContentBannner/ServicesContentBanner'
import ButtonBGImageBanner from "../../../Utils/Constant/ButtonBgImageBanner/ButtonBgImageBanner"
import CustomProjectList from "../../../Utils/Constant/CustomProjectsList/CustomProjectsList"
import Technologies from "../../../Components/ServicesListComponents/WebsiteDesignComponents/Technologies/Technologies"

import { wordpressBannerData, wordpressFaqs, wordpressPricingData } from '../../../Components/ServicesListComponents/WordpressComponents/Wordpress'
import { tabData } from '../../../Components/HomeComponents/CreativeDesign/tabdata'
import CustomServicesPricing from '../../../Utils/Constant/CustomServicesPricing/CustomServicesPricing'
import NewsLetterType from '../../../Components/ContactComponents/NewsLetterType/NewsLetterType'
import CustomFaqs from '../../../Utils/Constant/Customfaqs/Customfaqs'

const WordPress = () => {
  return (
    <div>
      <ServicesCustomBanner image="https://res.cloudinary.com/dpm8fa6gn/image/upload/v1755961809/pexels-antoni-shkraba-4348404-1-scaled-1_pvd7nr.webp" 
  heading="WORDPRESS DEVELOPMENT"/>


  <ServicesContentBanner {...wordpressBannerData}/>
  <ButtonBGImageBanner 
  heading="If You Want To Design Or Develop Your Project."
  buttonText="Get a Quote"/>

  <CustomProjectList content={tabData[6].content}/>

  <Technologies/>

 <CustomServicesPricing pricingData={wordpressPricingData}/>

<CustomFaqs faqs={wordpressFaqs}/>

<NewsLetterType/>

    </div>
  )
}

export default WordPress
