import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Pricing from "../Pages/Pricing/Pricing";
import AiVideo from "../Pages/Services/AiVideo/AiVideo";
import Branding from "../Pages/Services/Branding/Branding";
import EcommerceDesign from "../Pages/Services/EcommerceDesign/EcommerceDesign";
import LogoDesign from "../Pages/Services/LogoDesign/LogoDesign";
import MainServices from "../Pages/Services/MainServices/MainServices";
import MobileApplication from "../Pages/Services/MobileApplication/MobileApplication";
import WebsiteDesign from "../Pages/Services/WebsiteDesign/WebsiteDesign";
import WordPress from "../Pages/Services/WordPress/WordPress";

export const routes = [
    {
        path:"/",
        element:<Home/>
    },
     {
        path:"/About",
        element:<About/>
    },
     {
        path:"/Portfolio",
        element:<Portfolio/>
    },
    {
        path:"/Pricing",
        element:<Pricing/>
    },
     {
        path:"/Contact",
        element:<Contact/>
    },
    {
        path:"/Services",
        element:<MainServices/>
    },
    {
        path:"/websiteDesignAndDevelopment",
        element:<WebsiteDesign/> 
    },
    {
        path:"/wordpress",
        element:<WordPress/> 
    },
    {
        path:"/logodesign",
        element:<LogoDesign/> 
    },
    {
        path:"/ecommerceWebsiteDesign",
        element:<EcommerceDesign/> 
    },
    {
        path:"/branding",
        element:<Branding/> 
    },
    {
        path:"/mobileApplication",
        element:<MobileApplication/> 
    },
    {
        path:"/AiVideoAndAnimation",
        element:<AiVideo/> 
    },

]