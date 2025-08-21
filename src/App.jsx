import React from 'react'
import { routes } from './routes'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import CustomNav from './Components/CustomNav/CustomNav'
import Footer from './Components/CustomFooter/CustomFooter'




const App = () => {
  return (
    <div>
      <Router>
        <CustomNav/>
        <Routes>
          {
            routes.map((items,index)=>{
              return(
                <Route key={index} path={items?.path} element={items?.element}/>
              )
            })
          }
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  )
}

export default App
