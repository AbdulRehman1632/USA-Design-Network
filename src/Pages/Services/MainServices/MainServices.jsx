import React from 'react'
import ServicesBanner from '../../../Components/ServicesComponents/ServicesBanner/ServicesBanner'
import ServicesCards from '../../../Components/ServicesComponents/ServicesCards/ServicesCards'
import NewsLetterType from '../../../Components/ContactComponents/NewsLetterType/NewsLetterType'

const MainServices = () => {
  return (
    <div>

      <ServicesBanner/>

      <ServicesCards limit={15} showButton={false}/>

      <NewsLetterType/>

      
    </div>
  )
}

export default MainServices
